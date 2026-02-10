$(document).ready(function() {
    const pokemonCards = [
        'https://images.pokemontcg.io/base1/4_hires.png', 'https://images.pokemontcg.io/base1/7_hires.png',
        'https://images.pokemontcg.io/base1/2_hires.png', 'https://images.pokemontcg.io/base1/10_hires.png',
        'https://images.pokemontcg.io/base1/6_hires.png', 'https://images.pokemontcg.io/base1/1_hires.png',
        'https://images.pokemontcg.io/base1/8_hires.png', 'https://images.pokemontcg.io/base1/11_hires.png',
        'https://images.pokemontcg.io/base1/12_hires.png', 'https://images.pokemontcg.io/base1/13_hires.png',
        'https://images.pokemontcg.io/base1/14_hires.png', 'https://images.pokemontcg.io/base1/16_hires.png',
        'https://images.pokemontcg.io/base1/3_hires.png', 'https://images.pokemontcg.io/base1/5_hires.png',
        'https://images.pokemontcg.io/base1/9_hires.png', 'https://images.pokemontcg.io/basep/1_hires.png',
        'https://images.pokemontcg.io/base1/115_hires.png', 'https://images.pokemontcg.io/base1/70_hires.png'
    ];

    const yugiohCards = [
        'https://images.ygoprodeck.com/images/cards/89631139.jpg', 'https://images.ygoprodeck.com/images/cards/46986414.jpg',
        'https://images.ygoprodeck.com/images/cards/15025844.jpg', 'https://images.ygoprodeck.com/images/cards/38033121.jpg',
        'https://images.ygoprodeck.com/images/cards/44519536.jpg', 'https://images.ygoprodeck.com/images/cards/05711613.jpg',
        'https://images.ygoprodeck.com/images/cards/33782437.jpg', 'https://images.ygoprodeck.com/images/cards/31709826.jpg',
        'https://images.ygoprodeck.com/images/cards/08124921.jpg', 'https://images.ygoprodeck.com/images/cards/70781052.jpg',
        'https://images.ygoprodeck.com/images/cards/11961740.jpg', 'https://images.ygoprodeck.com/images/cards/83764718.jpg',
        'https://images.ygoprodeck.com/images/cards/53129443.jpg', 'https://images.ygoprodeck.com/images/cards/24094653.jpg',
        'https://images.ygoprodeck.com/images/cards/57143367.jpg', 'https://images.ygoprodeck.com/images/cards/10000000.jpg',
        'https://images.ygoprodeck.com/images/cards/10000010.jpg', 'https://images.ygoprodeck.com/images/cards/10000020.jpg'
    ];

    function populateGrid(pageId, cardArray, startIndex) {
        const $grid = $(`#${pageId} .grid-container`);
        if (!$grid.length) return;
        for (let i = 0; i < 9; i++) {
            const cardUrl = cardArray[startIndex + i];
            if (cardUrl) {
                const $slot = $(`
                    <div class="card-pocket">
                        <img src="${cardUrl}" alt="TCG Card">
                    </div>
                `);
                $grid.append($slot);
            }
        }
    }

    populateGrid('page1', pokemonCards, 0);
    populateGrid('page2', pokemonCards, 9);
    populateGrid('page3', yugiohCards, 0);
    populateGrid('page4', yugiohCards, 9);

    const $album = $('#album');

    // Initialize turn.js with the correct number of pages and options
    $album.turn({
        width: 900,
        height: 600,
        autoCenter: true,
        display: 'double',
        acceleration: true,
        elevation: 100,
        gradients: true,
        duration: 800
    });

    $(window).bind('keydown', function(e) {
        if (e.keyCode === 37) {
            $album.turn('previous');
        } else if (e.keyCode === 39) {
            $album.turn('next');
        }
    });
});
