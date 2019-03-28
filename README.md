# GoChain VueJs dApp Starter

A simple decentralized application (dapp) in which the user can add or subtract one from a value stored in a smart contract.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## File Setup
Everything is in the source folder `/src` from there things are seperated into hopefully easy to understand folders.

### Components
The main parts you'll want to change is the `/components` folder where you can see where the bulk of the work is for the frontend of the dapp.

### Contracts
The Contract info (ABI and Contract address) is stored in `/util/constants/` the counterContract.js file has everything set up how it should be.

## Next Steps
Kick the tires and start adding in your code + contracts + UI.  Web3 is wired up for you and polling so it should detect wallet changes and if a user disconnects.  This should give you a solid shell of structure to build without getting in your way.

[More on GoChain](http://www.gochain.io)

[GoChain on Github](https://github.com/gochain-io)

[GoChain Stats](https://stats.gochain.io/)

[GoChain Explorer](https://explorer.gochain.io)

[GoChain Testnet Explorer](https://testnet-explorer.gochain.io)

[More on VueJs](https://vuejs.org/)

### Project Credits
This project was modified and simplified for demo purposes from the awesome example made by mesirendon here: https://github.com/mesirendon/DappExample.
