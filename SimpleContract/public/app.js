let web3 = require('web3');

let contractABI = [];
let contractAddress = 0x625Aa95F75Dae083803b018cB4ae16556A34f56A;

web3 = new Web3('http://localhost:9545');

let simpleContract = web3.eth.contract(contractABI, contractAddress);

console.log(simpleContract);

web3.eth.getAccounts()
    .then(console.log);