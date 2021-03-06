// Array di oggetti (carte)

const fullDeck = [
    {
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
        borderColor: '#b42121',
        illustration: {
            artist: {
                id: 1,
                artistName: 'Simon Bisley',
            }, 
            source: 'https...',
        }  
    },
    {
        id: 2,
        cardName: 'Daybreak Ranger',
        throwCost: ['2', 'G'],
        convertedManaCost: 3,
        primaryType: 'Creature',
        secondaryType: 'Human Archer',
        expansionSymbol: {
            editionId: 5,
            expName: 'Normal Expansion',
            rarity: 'common',
        }, 
        abilities: [
            {
                manaCost: ['G', 'T'], 
                description: 'Lorem ipsum...',
            },
        ],
        flavorText: {
            quote: 'At the beginning...',
            author: 'John Doe',
        }, 
        collectionNumber: '29/270',
        strenght: 2,
        constitution: 2,
        borderColor: '#057d3a',
        illustration: {
            artist: {
                id: 2,
                artistName: 'Steve Prescott',
            }, 
            source: 'https...',
        }  
    },
    {
        id: 3,
        cardName: 'Emeria\'s Call',
        throwCost: ['4', 'W', 'W', 'W'],
        convertedManaCost: 7,
        primaryType: 'Sorcery',
        expansionSymbol: {
            editionId: 8,
            expName: 'Special Expansion',
            rarity: 'silver',
        }, 
        abilities: [],
        flavorText: {
            quote: 'We do...',
            author: 'Kasla',
        }, 
        collectionNumber: '121/280',
        strenght: 3,
        constitution: 3,
        borderColor: '#000',
        illustration: {
            artist: {
                id: 3,
                artistName: 'Neil Hamn',
            }, 
            source: 'https:...',
        }  
    },
];
console.table(fullDeck);




//! FUNZIONI 

//1. Stampo template singola carta
function buildCardTemplate (card){
      //TODO Costruzione stringhe per propriet?? opzionali
      const secondaryType = card.secondaryType ? `- ${card.secondaryType}` : '';


      //TODO Costruzione stringhe per Array
        let abilitiesProperty = 'No skills for this card.';
        
  
        if (card.abilities.length) {
            abilitiesProperty = '<ul>';
  
            for(let i = 0; i < card.abilities.length; i++){
                 
                const currentAbility = card.abilities[i];
                abilitiesProperty += `<li>Mana Cost: ${currentAbility.manaCost}</li>`;
                abilitiesProperty += `<li>Description: ${currentAbility.description}</li>`;
                  
            }
  
            abilitiesProperty += '</ul>';
        }
  
         
  let cardFeatures = `
  <div class = "cards" style = 'border: 5px solid ${card.borderColor};'>
    <ul>
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
  </div>
  `
  return cardFeatures;
};


//2. Stampo deck
const cardSection = document.getElementById('cards'); 

const renderDeck = (deck, targetElement) => {

    let deckTemplate = '';

    for(let i = 0; i < deck.length; i++){
    
        const currentCard = deck[i];
        deckTemplate += buildCardTemplate(currentCard);
    }


    targetElement.innerHTML = deckTemplate;

};


// Stampa in HTML 
renderDeck(fullDeck, cardSection);


//Variabili per i campi del form
const inputField = document.getElementById('search');
const selectField = document.getElementById('filter');
const button = document.getElementById('filter-btn');


//Eventi 
selectField.addEventListener('change', () => {
    const currentValue = selectField.value;

    if (currentValue !== 'all') {
        inputField.classList.remove('hidden');
    } else {
        inputField.classList.add('hidden');
    }
});


button.addEventListener('click', () => {
    const inputValue = inputField.value;
    const selectValue = selectField.value;

    if (selectValue === 'all') {
        renderDeck(fullDeck, cardSection);
        return;
    }


    const checkFullDeck = [];

    for (let i = 0; i < fullDeck.length; i++) {
        const currentCard = fullDeck[i];


        switch(selectValue){
            case 'id':
            case 'convertedManaCost':
            case 'strenght':
            case 'constitution':
                if (currentCard[selectValue] == inputValue){
                    checkFullDeck.push(currentCard);
                }
                break;

            default:
                if (currentCard[selectValue].includes(inputValue)){
                    checkFullDeck.push(currentCard);
                }  

        }
    }


    renderDeck(checkFullDeck, cardSection);
});