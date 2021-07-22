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
    flavorText: {
        quote: 'It took all...',
        author: 'John Doe',
    }, 
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

     //Costruzione stringhe per proprietà opzionali

     const secondaryType = card.secondaryType ? '- ${card.secondaryType}' : '';

let cardFeatures = `
<ul class = "card">
    <li><strong>Id:</strong> ${card.id}</li>
    <li><strong>Card name:</strong> ${card.cardName}</li>
    <br>

    <li><strong>Throw cost:</strong> ${card.throwCost}</li>
    <li>CMC <em>(Converted Mana Cost)</em>: ${card.convertedManaCost}</li>
    <br>

    <li><strong>Type Line:</strong> ${card.primaryType} ${card.secondaryType}</li>
    <br>

    <li><strong>Expansion Symbol:</strong>
        <ul>
            <li>Edition: ${card.expansionSymbol.editionId}</li>
            <li>Expansion Name: ${card.expansionSymbol.expName}</li>
            <li>Rarity: ${card.expansionSymbol.rarity}</li>
        </ul>
    </li>
    <br>

    <li><strong>Abilities:</strong></li>
    
    

</ul>
`
cardSection.innerHTML = cardFeatures;