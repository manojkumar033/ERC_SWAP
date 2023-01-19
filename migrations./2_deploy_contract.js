const ercSwap = artifacts.require("ercSwap");
const ercToken = artifacts.require("ercToken");


module.exports = async function(deployer) {
 
 await  deployer.deploy(ercToken);
 const token = await ercToken.deployed()
  
await deployer.deploy(ercSwap, token.address);
const ercswap = await ercSwap.deployed()

await token.transfer(ercswap.address,'1000000000000000000000000')
};
