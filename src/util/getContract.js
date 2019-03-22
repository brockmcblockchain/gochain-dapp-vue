import Web3 from 'web3'
import {address, ABI} from './constants/counterContract'

let getContract = new Promise(function (resolve, reject) {
  let web3 = new Web3(window.web3.currentProvider)
  let counterContract = web3.eth.contract(ABI)
  let counterContractInstance = counterContract.at(address)
  console.log(counterContract)
  console.log(counterContractInstance)
  resolve(counterContractInstance)
})

export default getContract
