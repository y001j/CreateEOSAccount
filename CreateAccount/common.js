let fs = require('fs');
let Eos = require('eosjs');

//production
//let httpEndpoint = 'https://publicapi-mainnet.eosauthority.com';
//let chainId = 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906';

//test
let httpEndpoint = 'http://192.168.0.101:8888';
let chainId = 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f';

var secret = fs.readFileSync('buy/key.txt', {encoding: 'utf8'});
let keyProvider = [secret];
let eos = Eos({httpEndpoint, chainId, keyProvider});

module.exports = {
  eos: eos
};
