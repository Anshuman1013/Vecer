import HDWalletProvider from "@truffle/hdwallet-provider";

let web3;
const connectWeb3 = () => {
  if (
    process.env.NODE_ENV === "development" &&
    process.env.REACT_APP_STAGE !== "testnet"
  ) {
    web3 = new Web3(
      new Web3.providers.HttpProvider(process.env.REACT_APP_LOCAL_ENDPOINT)
    );
  } else {
    web3 = new Web3(
      new HDWalletProvider({mnemonic: {
        phrase: "bulk bus people famous flag machine faint pulse mammal unique minute member"
      },
      providerOrUrl: "https://goerli.infura.io/v3/d82bdbda1fb848148425db6aebd0f0b2",
      pollingInterval: 8000


    })
    );
  }
  CertificationInstance.setProvider(web3.currentProvider);
  // hack for web3@1.0.0 support for localhost testrpc, see https://github.com/trufflesuite/truffle-contract/issues/56#issuecomment-331084530
  if (typeof CertificationInstance.currentProvider.sendAsync !== "function") {
    CertificationInstance.currentProvider.sendAsync = function() {
      return CertificationInstance.currentProvider.send.apply(
        CertificationInstance.currentProvider,
        arguments
      );
    };
  }

  if (
    process.env.NODE_ENV === "development" &&
    process.env.REACT_APP_STAGE !== "testnet"
  ) {
    console.log("Current host: " + web3.currentProvider.host);
  } else {
    console.log(web3.currentProvider);
    // console.log("Current host: " +  web3.currentProvider.engine._providers[2].provider.host );
  }
};
