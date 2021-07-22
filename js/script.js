// Oggetto Card

const card = {
    id: 1,
    cardName: 'Bloodfire Colossus',
    throwCost: ['6', 'R', 'R'],
    converteaManaCost: 8,
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
    ]
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