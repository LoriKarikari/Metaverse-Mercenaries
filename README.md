# Ethereum Starter (WIP)

My personal [pnpm](https://github.com/pnpm/pnpm) monorepo starter that I use to create fullstack Ethereum apps. It is configured for use with Polygon and Ethereum and includes the following packages:

### next - frontend

- [x] [next.js](https://github.com/vercel/next.js/)
- [x] [TailwindCSS](https://github.com/tailwindlabs/tailwindcss)
- [ ] [react-query](https://github.com/tannerlinsley/react-query)
- [ ] [zustand](https://github.com/pmndrs/zustand)
- [x] [ethers.js](https://github.com/ethers-io/ethers.js/)

### hardhat - smart contracts

- [x] [Hardhat](https://github.com/nomiclabs/hardhat)
- [ ] [Waffle](https://github.com/EthWorks/Waffle)
- [x] [TypeChain](https://github.com/dethcrypto/TypeChain)
- [ ] [IPFS](https://github.com/ipfs/ipfs)
- [x] [OpenZeppelin Contracts](https://github.com/OpenZeppelin/openzeppelin-contracts)

### subgraph - GraphQL

- [ ] [Subgraph](https://thegraph.com/)

## Usage

Clone the repository:

```shell
git clone https://github.com/LoriKarikari/eth-starter.git
```

### Development

This command will start the Next.js application and the [hardhat-deploy](https://github.com/wighawag/hardhat-deploy) watcher which will compile and deploy the hardhat app locally and also generate TypeScript types on file change 🎉. It also outputs the test accounts.

```shell
pnpm dev
```

Now you can view the example application at `http://localhost:3000`.

In VSCode, prettier formatting on save only works with JS/TS files. For some reason the plugin doesn't pick up the Solidity config. To format all files with prettier run:
```shell
pnpm prettier
```
