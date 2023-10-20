
export interface Product {
    uid: string;
    name: string;
    image: string;
    description: string;
    price: number;
    percentageDiscount: number;
    relatedProducts: string[];
}

export let emptyProduct: Product = {
    uid: '',
    name: '',
    image: '',
    description: '',
    price: 0,
    percentageDiscount: 0,
    relatedProducts: []
}

export let productList: {[key: string]: Product};
productList = {
    "1111-abcde-1111": {
        uid: '1111-abcde-1111',
        name: 'Dehner Saatgut - Bunte Mischung',
        image: '/assets/img/DehnerSaatgutKapuzinerkresseRankendeMischungSaatgutSamenSaemereienPflanzensamen.jpg',
        description: 'Ein Mischen aus farbenfreudigen Pflanzen.',
        price: 1.19,
        percentageDiscount: 0,
        relatedProducts: [
            '4444-abcde-4444',
            '6666-abcde-6666',
            '7777-abcde-7777'
        ]
    },
    '2222-abcde-2222': {
        uid: '2222-abcde-2222',
        name: 'Gardena Gartenschlauchwagen',
        image: '/assets/img/GARDENASchlauchwagenAquaRollMEasySet.jpg',
        description: 'Ein Gartenschlauchwagen, welcher maximale flexibilität beim Gießer ermöglicht.',
        price: 37.99,
        percentageDiscount: 0,
        relatedProducts: []
    },
    '3333-abcde-3333': {
        uid: '3333-abcde-3333',
        name: 'Gardena Elektro Rasenmäher',
        image: '/assets/img/GARDENAElektroRasenmaeherPowerMax180042.jpg',
        description: 'Der Elektrorasenmäher ist eine umweltfreundliche und leise Option zur Rasenpflege, die durch seine elektrische Antriebskraft effizientes Mähen und eine saubere Schnittqualität bietet.',
        price: 239.99,
        percentageDiscount: 0.12,
        relatedProducts: []
    },
    '4444-abcde-4444': {
        uid: '4444-abcde-4444',
        name: 'Dehner Blumenerde',
        image: '/assets/img/DehnerBlumenerde.jpg',
        description: 'Blumenerde ist eine speziell zusammengesetzte Erde, die für das optimale Wachstum von Pflanzen in Töpfen und Beeten verwendet wird.',
        price: 3.70,
        percentageDiscount: 0,
        relatedProducts: []
    },
    '5555-abcde-5555': {
        uid: '5555-abcde-5555',
        name: 'Gardena Gartenschlauch',
        image: '/assets/img/DehnerGartenschlauchSchlauchComfortFlex.jpg',
        description: 'Ein Gartenschlauch ist ein flexibles, wasserführendes Gerät, das ideal zum Bewässern von Pflanzen und Rasenflächen im Garten geeignet ist.',
        price: 12.99,
        percentageDiscount: 0,
        relatedProducts: []
    },
    '6666-abcde-6666': {
        uid: '6666-abcde-6666',
        name: 'Greenbar Wasserstandsanzeiger',
        image: '/assets/img/GreenbarWasserstandsanzeigerDehnerExpressHerzig.jpg',
        description: 'Der Wasserstandsanzeiger Blumentopf ermöglicht es, den Feuchtigkeitsgehalt der Blumenerde mühelos zu überwachen und sicherzustellen, dass Ihre Pflanzen stets optimal bewässert werden.',
        price: 7.5,
        percentageDiscount: 0,
        relatedProducts: []
    },
    '7777-abcde-7777': {
        uid: '7777-abcde-7777',
        name: 'Elho Anzucht Schaufel',
        image: '/assets/img/SchaufelSschwarzElhoAnzuchtAussaat.jpg',
        description: 'Ideal zum Ausstechen der jungen Triebe um diese ihn neues Zuhause umzutopfen',
        price: 2.49,
        percentageDiscount: 0,
        relatedProducts: []
    }
};
