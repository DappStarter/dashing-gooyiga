require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note oval unknown just enroll success gift'; 
let testAccounts = [
"0x1e97b3939d8d7c95eb839db822e1bfa78c523345f4e33b8d5c4d9062dee4d945",
"0xa5648274a90918e95aa6651da288db6198c6d738cac8c27f6cdbf4c97135c0f7",
"0xf1772a487115e37a1acb995f4279654179d59800fc04b9b453cc30b56dbd9444",
"0xd65b8da0d8777f4ec9ad9486fcdb4fee294badfea6258a77fd68d35cf53979d0",
"0xd8f6626743a65cd2a62cdb34fc1d403bea17f4523d61339e249f648e1494f258",
"0xf63bf9b7d5433d5231d235e2fda06a3ff962c56e47a8a169b50dc3aef117ae96",
"0x47f6358ee3cd883151adb25129da71e1be445011189d753c3b53871800273a1f",
"0x4db23dddc7dd6d517832d367f71678015a92822cf694c923a840bfa39e267b19",
"0x80d8a8899b1425e76ea8e3a4c0cabf284906f2f4317c8317a0131d13358ddb32",
"0xf648cc6ac7f64cdd9d5bd80e887c47441bff38d40f7df0ae90237f98772239b2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
