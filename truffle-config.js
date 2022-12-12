// Allows us to use ES6 in our migrations and tests.
require("babel-register");
const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();
module.exports = {
    networks: {
        matic: {
            provider: () => new HDWalletProvider(process.env.MNEMONIC, process.env.PROJECT_ENDPOINT),
            network_id: 80001,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true
          },
      
        // goerli: {
        //     provider: function() {
        //         return new HDWalletProvider(
        //             process.env.MNEMONIC,
        //             process.env.PROJECT_ENDPOINT,
        //             address_index=0,
        //             num_addresses=2
        //         );
        //     },
        //     network_id: "*",
        //     // gas: 4500000,
        //     // gasPrice: 10000000000,
        // },
        development: {
            host: process.env.LOCAL_ENDPOINT.split(":")[1].slice(2),
            port: process.env.LOCAL_ENDPOINT.split(":")[2],
            network_id: "*",
        },
        compilers: {
            solc: {
                version: "^0.4.24",
            },
        },
    },
};