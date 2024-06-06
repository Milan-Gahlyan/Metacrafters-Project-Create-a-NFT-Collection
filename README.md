# Project: Create a NFT Collection

## Description

The provided JavaScript code simulates the minting and management of NFTs (Non-Fungible Tokens) through the creation of objects that hold various metadata attributes. It begins by initializing an empty array named nfts to store the NFT objects. The mintNFT function is defined to take parameters such as name, eyeColor, shirtType, and bling, which represent the metadata for each NFT. Inside this function, an object is created with these attributes and then added to the nfts array. The listNFTs function iterates over the nfts array, printing the metadata of each NFT to the console in a formatted manner, including an identifier number. Additionally, the getTotalSupply function returns the total count of NFTs by returning the length of the nfts array. Finally, the code demonstrates its functionality by minting three NFTs with different metadata, listing all minted NFTs, and printing the total number of NFTs to the console. This simulation showcases basic principles of object creation, array manipulation, and function definition in JavaScript, providing a foundational understanding of how NFTs could be managed in a real-world scenario.

## Getting Started

### Executing program

1. Variable to hold NFTs:

```javascript
let nfts = [];

```
- This array will store each NFT object we create.

2. Minting function:

```javascript
function mintNFT(name, eyeColor, shirtType, bling) {
    let nft = {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        bling: bling
    };
    nfts.push(nft);
}

```
- This function takes metadata as parameters, creates an object, and pushes it to the nfts array.

3. Listing function:

```javascript
function listNFTs() {
    for (let i = 0; i < nfts.length; i++) {
        console.log(`NFT #${i + 1}`);
        console.log(`Name: ${nfts[i].name}`);
        console.log(`Eye Color: ${nfts[i].eyeColor}`);
        console.log(`Shirt Type: ${nfts[i].shirtType}`);
        console.log(`Bling: ${nfts[i].bling}`);
        console.log('--------------------');
    }
}

```
- This function loops through the nfts array and prints the metadata for each NFT.

4. Total supply function:

```javascript
function getTotalSupply() {
    return nfts.length;
}

```
- This function returns the length of the nfts array, which is the total number of NFTs created.

5. Function calls:

```javascript
mintNFT("NFT One", "Blue", "T-shirt", "Gold Chain");
mintNFT("NFT Two", "Green", "Hoodie", "Silver Ring");
mintNFT("NFT Three", "Brown", "Sweater", "Diamond Watch");

listNFTs();
console.log(`Total NFTs: ${getTotalSupply()}`);

```
- These calls demonstrate minting three NFTs, listing them, and printing the total number of NFTs.


## Authors

Milan


## License

This project is licensed under the MIT License - see the LICENSE.md file for details
