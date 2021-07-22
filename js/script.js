// Oggetto Card

const card = {
    id: 1,
    cardName: 'Bloodfire Colossus',
    throwCost: ['6', 'R', 'R'],
    convertedManaCost: 8,
    primaryType: 'Creature',
    secondaryType: 'Giant',
    expansionSymbol: {
        editionId: 9,
        expName: 'Special Expansion',
        rarity: 'gold',
    }, 
    flavorText: {
        quote: 'It took all...',
        author: 'John Doe',
    }, 
    abilities: [
        {
            manaCost: ['R', 'T'],
            description: 'Lorem ipsum...',
        },
        {
            manaCost: ['W', 'B', 'T'],
            description: 'Lorem ipsum...',
        },
    ],
    collectionNumber: '177/350',
    strenght: 13,
    constitution: 13,
    borderColor: '#000',
    illustration: {
        artist: {
            id: 1,
            artistName: 'Simon Bisley',
        }, 
        source: 'img',
    }  
};

console.table(card);



// Stampa in HTML 
 
const cardSection = document.getElementById('cards'); 

let cardFeatures = `
<ul class = card>
    <li>Id: ${card.id}</li>
    <li><strong>Card name:</strong> ${card.cardName}</li>
    <li>Throw cost: ${card.throwCost}</li>
    <li>CMC <em>(Converted Mana Cost)</em>: ${card.convertedManaCost}</li>
    <li>Type Line <em>(Basic card)</em>: ${card.primaryType}</li>
    <li>Type Line <em>(Kind of card)</em>: ${card.secondaryType}</li>
    
    

</ul>
`
cardSection.innerHTML = cardFeatures;