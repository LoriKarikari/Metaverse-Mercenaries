import Card from '@components/Card'
import { Character } from '@types'
import { attack, transformCharacterData } from '@utils'
import React, { useEffect, useState } from 'react'
import useStore from '@store'

// TODO: extra -> multiple opponents
// TODO: extra -> levels
export default function Arena() {
  const [boss, setBoss] = useState<Character>()
	const [attackState, setAttackState] = useState('')
  const contract = useStore((state) => state.contract)
  const setContract = useStore((state) => state.setContract)
	const hero = useStore((state) => state.hero)
	const setHero = useStore((state) => state.setHero)
	const updateHeroHp = useStore((state) => state.updateHeroHp)


  useEffect(() => {
    !contract && setContract()
    async function fetchBoss() {
      const bossTxn = await contract?.getBigBoss()
      setBoss(transformCharacterData(bossTxn))
    }
    if(contract){
			!hero && setHero()
			fetchBoss()			
		}

		const onAttackComplete = (newBossHp: any, newPlayerHp: any) => {
			const bossHp = newBossHp.toNumber();
			const playerHp = newPlayerHp.toNumber();

			console.log(`AttackComplete: Boss Hp: ${bossHp} Player Hp: ${playerHp}`);

			updateHeroHp(playerHp)
			setBoss((prevState) => ({
				 ...prevState, hp: bossHp
			}));
	};

	if (contract) {
			fetchBoss();
			contract.on('AttackComplete', onAttackComplete);
	}

	return () => {
			contract &&	contract.off('AttackComplete', onAttackComplete);	
	}
  }, [contract])

	function handleAttack() {
		setAttackState('attacking')
		console.log('Attacking boss...');
		try {
			contract &&	attack(contract)
			setAttackState('hit')
		} catch(err) {
			console.log(err)
		}
	}

  return (
    <div className="h-[calc(100vh-48px)] mt-12  overflow-hidden bg-[#121325] absolute w-full">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
			<h1>Arena</h1>
      {boss && (
        <div className="flex flex-col sm:my-8 sm:align-middle sm:max-w-sm xl:max-w-sm sm:w-full sm:p-6">
          <Card hero={boss} owned={true} />
					<div className="health-bar">
              <progress value={boss.hp} max={boss.maxHp} />
              <p>{`${boss.hp} / ${boss.maxHp} HP`}</p>
            </div>
          <button
						onClick={handleAttack}
            type="button"
            className="items-center px-12 py-6 border border-transparent text-4xl font-medium rounded-md shadow-sm text-white bg-[#579CE9] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Attack!
          </button>
        </div>
      )}
			{hero && 
			 <div className="flex flex-col sm:my-8 sm:align-middle sm:max-w-sm xl:max-w-sm sm:w-full sm:p-6">
			 <Card hero={hero} owned={true} />			 
		 </div>
			}
			</div>
    
    </div>
  )
}
