import chai, { expect } from 'chai'
import { ethers } from 'hardhat'
import { solidity } from 'ethereum-waffle'

chai.use(solidity)

// describe('Todo', function () {
//   it("Should return the new greeting once it's changed", async function () {
//     const Greeter = await ethers.getContractFactory('Greeter');
//     const greeter = await Greeter.deploy('Hello, world!');
//     await greeter.deployed();

//     expect(await greeter.greet()).to.equal('Hello, world!');

//     const setGreetingTx = await greeter.setGreeting('Hola, mundo!');

//     // wait until the transaction is mined
//     await setGreetingTx.wait();

//     expect(await greeter.greet()).to.equal('Hola, mundo!');
//   });
// });
