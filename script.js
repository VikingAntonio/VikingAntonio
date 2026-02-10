$(document).ready(function() {
    const pokemonCards = [
        'https://images.pokemontcg.io/base1/4_hires.png', // Charizard
        'https://images.pokemontcg.io/base1/7_hires.png', // Blastoise
        'https://images.pokemontcg.io/base1/2_hires.png', // Venusaur
        'https://images.pokemontcg.io/base1/10_hires.png', // Mewtwo
        'https://images.pokemontcg.io/base1/15_hires.png', // Venusaur (Wait, base1/15 is Venusaur? No, 2 is Venusaur. 15 is Venusaur in some set?)
        'https://images.pokemontcg.io/base1/6_hires.png', // Gyarados
        'https://images.pokemontcg.io/base1/1_hires.png', // Alakazam
        'https://images.pokemontcg.io/base1/8_hires.png', // Machamp
        'https://images.pokemontcg.io/base1/11_hires.png', // Nidoking
        'https://images.pokemontcg.io/base1/12_hires.png', // Ninetales
        'https://images.pokemontcg.io/base1/13_hires.png', // Poliwrath
        'https://images.pokemontcg.io/base1/14_hires.png', // Raichu
        'https://images.pokemontcg.io/base1/16_hires.png', // Zapdos
        'https://images.pokemontcg.io/base1/3_hires.png', // Chansey
        'https://images.pokemontcg.io/base1/5_hires.png', // Clefairy
        'https://images.pokemontcg.io/base1/9_hires.png', // Magneton
        'https://images.pokemontcg.io/basep/1_hires.png', // Pikachu Promo
        'https://images.pokemontcg.io/base1/115_hires.png' // Kangaskhan
    ];

    const yugiohCards = [
        'https://images.ygoprodeck.com/images/cards/89631139.jpg', // Blue-Eyes
        'https://images.ygoprodeck.com/images/cards/46986414.jpg', // Dark Magician
        'https://images.ygoprodeck.com/images/cards/15025844.jpg', // Red-Eyes
        'https://images.ygoprodeck.com/images/cards/38033121.jpg', // Dark Magician Girl
        'https://images.ygoprodeck.com/images/cards/44519536.jpg', // Exodia Head
        'https://images.ygoprodeck.com/images/cards/05711613.jpg', // Exodia Left Arm
        'https://images.ygoprodeck.com/images/cards/33782437.jpg', // Exodia Right Arm
        'https://images.ygoprodeck.com/images/cards/31709826.jpg', // Exodia Left Leg
        'https://images.ygoprodeck.com/images/cards/08124921.jpg', // Exodia Right Leg
        'https://images.ygoprodeck.com/images/cards/70781052.jpg', // Summoned Skull
        'https://images.ygoprodeck.com/images/cards/11961740.jpg', // Thousand-Eyes Restrict
        'https://images.ygoprodeck.com/images/cards/83764718.jpg', // Monster Reborn
        'https://images.ygoprodeck.com/images/cards/53129443.jpg', // Dark Hole
        'https://images.ygoprodeck.com/images/cards/24094653.jpg', // Polymerization
        'https://images.ygoprodeck.com/images/cards/57143367.jpg', // Blue-Eyes Ultimate
        'https://images.ygoprodeck.com/images/cards/10000000.jpg', // Slifer
        'https://images.ygoprodeck.com/images/cards/10000010.jpg', // Obelisk
        'https://images.ygoprodeck.com/images/cards/10000020.jpg'  // Ra
    ];

    // Populate Pages
    function populateGrid(pageId, cardArray, startIndex) {
        const $grid = $(`#${pageId} .grid-container`);
        for (let i = 0; i < 9; i++) {
            const cardUrl = cardArray[startIndex + i];
            const $slot = $(`<div class="card-pocket"><img src="${cardUrl}" alt="Card ${i+1}"></div>`);
            $grid.append($slot);
        }
    }

    populateGrid('page1', pokemonCards, 0);
    populateGrid('page2', pokemonCards, 9);
    populateGrid('page3', yugiohCards, 0);
    populateGrid('page4', yugiohCards, 9);

    // Initialize Turn.js
    $('#album').turn({
        width: 900,
        height: 600,
        autoCenter: true,
        duration: 1000,
        gradients: true,
        acceleration: true,
        elevation: 50,
        when: {
            turning: function(event, page, pageObj) {
                // Sound effect or other animations can go here
            }
        }
    });
});
