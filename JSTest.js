// Step 1: Create a variable to hold your NFTs
let nfts = [];

// Step 2: Function to mint an NFT
function mintNFT(name, eyeColor, shirtType, bling) {
    // Create an NFT object with the given metadata
    let nft = {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        bling: bling
    };
    
    // Store the NFT object in the array
    nfts.push(nft);
}

// Step 3: Function to list all NFTs
function listNFTs() {
    // Loop through the array and print the metadata of each NFT
    for (let i = 0; i < nfts.length; i++) {
        console.log(`NFT #${i + 1}`);
        console.log(`Name: ${nfts[i].name}`);
        console.log(`Eye Color: ${nfts[i].eyeColor}`);
        console.log(`Shirt Type: ${nfts[i].shirtType}`);
        console.log(`Bling: ${nfts[i].bling}`);
        console.log('--------------------');
    }
}

// Step 4: Function to get the total number of NFTs
function getTotalSupply() {
    return nfts.length;
}

// Call your functions below this line
mintNFT("NFT One", "Blue", "T-shirt", "Gold Chain");
mintNFT("NFT Two", "Green", "Hoodie", "Silver Ring");
mintNFT("NFT Three", "Brown", "Sweater", "Diamond Watch");

// List all NFTs
listNFTs();

// Print the total number of NFTs
console.log(`Total NFTs: ${getTotalSupply()}`);
