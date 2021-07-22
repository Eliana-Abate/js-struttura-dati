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
        source: 'https:...',
    }  
};

console.table(card);



// Stampa in HTML 
 
const cardSection = document.getElementById('cards'); 

    //TODO Costruzione stringhe per proprietà opzionali
        const secondaryType = card.secondaryType ? '- ${card.secondaryType}' : '';


    //TODO Costruzione stringhe per Array
        let abilitiesProperty = 'No skills for this card.';
        console.log(abilitiesProperty);

        if (card.abilities.length) {
            abilitiesProperty = '<ul>';

            for(let i = 0; i < card.abilities.length; i++){
                const currentAbility = card.abilities[i];
                abilitiesProperty += `<li>Mana Cost: ${currentAbility.manaCost}</li>`;
                abilitiesProperty += `<li>Description: ${currentAbility.description}</li>`;
            }

            abilitiesProperty = '</ul>';
        }

       


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

    <li><strong>Abilities:</strong> ${abilitiesProperty}</li>
    <br> 
     //! PROBLEMA 1: non legge l'array 

     //! Problema 2: mi manda in tilt la formattazione della lista

     //! Problema 3: vengono visualizzati i commenti

    <li>Quote: ${card.flavorText.quote}</li>  
    <li>Author: ${card.flavorText.author}</li>
    <br>

    <li>Collection Nr: ${card.collectionNumber}</li>
    <br>

    <li>Strenght / Constitution: ${card.strenght} / ${card.constitution}</li>
    <br>

    <li>Border-color: ${card.borderColor}</li>
    <br>

    <li>Illustration: 
        <ul>
            <li>Artist: ${card.illustration.artist.artistName}</li>
            <li>Image source: ${card.illustration.source}</li>
        </ul>
    </li>
    <br>
</ul>
`
cardSection.innerHTML = cardFeatures;