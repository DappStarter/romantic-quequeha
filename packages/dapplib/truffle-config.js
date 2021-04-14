require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remind concert grace merry flock south'; 
let testAccounts = [
"0x368e73c2d3e0632b672cf6943d3d6f3dd86e327b86a8ac6a0e683c1061d46293",
"0x2c7b8f1de25194bfeca48b874d8c5669fe96d5cad0e734cf50baa00526ea7656",
"0x39436f351d2e520d2d0f7dd15a9479e028bf1dc178611f7c10ae8cf47063485d",
"0x584d699f74c0327c9e758398cb3606344a7f5e060b1d281e60990314726cfcaf",
"0x6af8cca00993a6eedf1b31604d56ccd044603aa1e33f95dfaa677b8c8b8ac9da",
"0x956f22211a03ed73bf1dc4c09e306f7e89b18a5f272cab7c2adc47f2e5f7ef09",
"0xfffb62127777598996799eeb4aa25de9d0a7332f9fca1f0b1e30b6a54b10603b",
"0x3b77614954caf97cf64a172e8d12916847241d6fbb519ab128c0f9ba747d0145",
"0x8fed541789545426f296e882f67d01f7f6aa2bc19b9f90df23ea737083424d8e",
"0xb07bb8f8eeb8b1d822a8e90c4323d19e20a161e247c5eaa3899bcc733a9fcf27"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
