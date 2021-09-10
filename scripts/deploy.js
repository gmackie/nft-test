// scripts/deploy.js
async function main () {
  // We get the contract to deploy
  const Box = await ethers.getContractFactory('NftToken');
  console.log('Deploying NFT...');
  const nft = await NftToken.deploy();
  await nft.deployed();
  console.log('NFT deployed to:', nft.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
