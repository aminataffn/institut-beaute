class Prestation {
    constructor(name, category, duration, isFixedPrice, price, description) {
        this.name = name;
        this.category = category;
        this.duration = duration;
        this.isFixedPrice = isFixedPrice;
        this.price = price;
        this.description = description
    }
    getTextPrice() {
        if (this.isFixedPrice) {
            return (this.price + " euros")
        } else {
            return ("A partir de " + this.price + " euros")
        }
    }
}

class Category {
    constructor(name) {
        this.name = name;
        this.prestations = [];
    }
     addNewPrestation(name, duration, isFixedPrice, price, description){
        const prest = new Prestation(name, this.name, duration, isFixedPrice, price, description);
        this.prestations.push(prest);
     }
}

export const categories = [new Category('Cheveux'), new Category('Soins du visage'), new Category('Soins du corps'), new Category('Rituels Hammam')]

<<<<<<< HEAD

/* Prestations : Cheveux (categories[0]) */
categories[0].addNewPrestation('Brushing', '1 heures', true, 20, 'Shampoing + Brushing - Cheveux courts')
categories[0].addNewPrestation('Brushing', '1 heures', true, 25,  'Shampoing + Brushing - Cheveux mi-longs')
categories[0].addNewPrestation('Brushing', '1 heures', true, 30,  'Shampoing + Brushing - Cheveux longs')
categories[0].addNewPrestation('Lissage Nano Indien', '2 heures', false, 180, 'Lissage Nano Indien + Shampooing + Brushing - Cheveux courts')
categories[0].addNewPrestation('Lissage Nano Indien', '2 heures', false, 190, 'Lissage Nano Indien + Shampooing + Brushing - Cheveux mi-longs')
categories[0].addNewPrestation('Lissage Nano Indien', '2 heures', false, 200, 'Lissage Nano Indien + Shampooing + Brushing - Cheveux longs')
categories[0].addNewPrestation('Lissage Tanin', '2 heures', false, 120, 'Lissage Tanin + Shampooing + Brushing - Cheveux courts')
categories[0].addNewPrestation('Lissage Tanin', '2 heures', false, 130, 'Lissage Tanin + Shampooing + Brushing - Cheveux mi-longs')
categories[0].addNewPrestation('Lissage Tanin', '2 heures', false, 140, 'Lissage Tanin + Shampooing + Brushing - Cheveux longs')
categories[0].addNewPrestation('Lissage Organic Gold', '2 heures', false, 140, 'Lissage Organic Gold + Shampooing + Brushing - Cheveux courts')
categories[0].addNewPrestation('Lissage Organic Gold', '2 heures', false, 150, 'Lissage Organic Gold + Shampooing + Brushing - Cheveux mi-longs')
categories[0].addNewPrestation('Lissage Organic Gold', '2 heures', false, 160, 'Lissage Organic Gold + Shampooing + Brushing - Cheveux longs')
categories[0].addNewPrestation('Botox Capillaire', '2 heures', false, 60, 'Botox Capillaire + Shampooing + Brushing - Cheveux court')
categories[0].addNewPrestation('Botox Capillaire', '2 heures', false, 70, 'Botox Capillaire + Shampooing + Brushing - Cheveux mi-longs')
categories[0].addNewPrestation('Botox Capillaire', '2 heures', false, 80, 'Botox Capillaire + Shampooing + Brushing - Cheveux longs')
categories[0].addNewPrestation('Cryothérapie Capillaire', '2 heures', false, 70, 'Cryothérapie Capillaire + Shampooing + Brushing - Cheveux courts')
categories[0].addNewPrestation('Cryothérapie Capillaire', '2 heures', false, 80, 'Cryothérapie Capillaire + Shampooing + Brushing - Cheveux mi-longs')
categories[0].addNewPrestation('Cryothérapie Capillaire', '2 heures', false, 90, 'Cryothérapie Capillaire + Shampooing + Brushing - Cheveux longs')

/* Prestations : Soins du visage (categories[1]) */
/* Prestations : Soins du corps (categories[1]) */
/* Prestations : Onglerie (categories[1]) */
/* Prestations : Esthétique (categories[1]) */
/* Prestations : Privatisation (categories[1]) */
=======

categories[0].addNewPrestation('Shampoing + Brushing - Cheveux courts', '2 heures', true, 20, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et.')
categories[0].addNewPrestation('Shampoing + Brushing - Cheveux mi-longs', '2 heures', true, 25,  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et.')
categories[0].addNewPrestation('Shampoing + Brushing - Cheveux longs', '2 heures', true, 30, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et.')

categories[1].addNewPrestation('Lissage Nano Indien + Shampooing + Brushing - Cheveux courts', '2 heures', false, 180, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et.')
categories[1].addNewPrestation('Lissage Nano Indien + Shampooing + Brushing - Cheveux mi-longs', '2 heures', false, 190, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et.')
categories[1].addNewPrestation('Lissage Nano Indien + Shampooing + Brushing - Cheveux longs', '2 heures', false, 200, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et.')
categories[1].addNewPrestation('Lissage Tanin + Shampooing + Brushing - Cheveux courts', '2 heures', false, 120, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et.')
categories[1].addNewPrestation('Lissage Tanin + Shampooing + Brushing - Cheveux mi-longs', '2 heures', false, 130, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et.')
categories[1].addNewPrestation('Lissage Tanin + Shampooing + Brushing - Cheveux longs', '2 heures', false, 140, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et.')

categories[2].addNewPrestation('Lissage Organic Gold + Shampooing + Brushing - Cheveux courts', '2 heures', false, 140, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et.')
categories[2].addNewPrestation('Lissage Organic Gold + Shampooing + Brushing - Cheveux mi-longs', '2 heures', false, 150, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et.')
categories[2].addNewPrestation('Lissage Organic Gold + Shampooing + Brushing - Cheveux longs', '2 heures', false, 160, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et.')
categories[2].addNewPrestation('Botox Capillaire + Shampooing + Brushing - Cheveux court', '2 heures', false, 60, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et.')
categories[2].addNewPrestation('Botox Capillaire + Shampooing + Brushing - Cheveux mi-longs', '2 heures', false, 70, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et.')
categories[2].addNewPrestation('Botox Capillaire + Shampooing + Brushing - Cheveux longs', '2 heures', false, 80, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et.')

categories[3].addNewPrestation('Cryothérapie Capillaire + Shampooing + Brushing - Cheveux courts', '2 heures', false, 70, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et.')
categories[3].addNewPrestation('Cryothérapie Capillaire + Shampooing + Brushing - Cheveux mi-longs', '2 heures', false, 80, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et.')
categories[3].addNewPrestation('Cryothérapie Capillaire + Shampooing + Brushing - Cheveux longs', '2 heures', false, 90, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et.')




















export const prestations = [ 
    new Prestation('Shampoing + Brushing - Cheveux courts','Cheveux', true, 20),
    new Prestation('Shampoing + Brushing - Cheveux mi-longs','Cheveux', true, 25),
    new Prestation('Shampoing + Brushing - Cheveux longs','Cheveux', true, 30),
    
    new Prestation('Lissage Nano Indien + Shampooing + Brushing - Cheveux courts','Cheveux', false, 180),
    new Prestation('Lissage Nano Indien + Shampooing + Brushing - Cheveux mi-longs','Cheveux', false, 190),
    new Prestation('Lissage Nano Indien + Shampooing + Brushing - Cheveux longs','Cheveux', false, 200),

    new Prestation('Lissage Tanin + Shampooing + Brushing - Cheveux courts','Cheveux', false, 120),
    new Prestation('Lissage Tanin + Shampooing + Brushing - Cheveux mi-longs','Cheveux', false, 130),
    new Prestation('Lissage Tanin + Shampooing + Brushing - Cheveux longs','Cheveux', false, 140),

    new Prestation('Lissage Organic Gold + Shampooing + Brushing - Cheveux courts','Cheveux', false, 140),
    new Prestation('Lissage Organic Gold + Shampooing + Brushing - Cheveux mi-longs','Cheveux', false, 150),
    new Prestation('Lissage Organic Gold + Shampooing + Brushing - Cheveux longs','Cheveux', false, 160),

    new Prestation('Botox Capillaire + Shampooing + Brushing - Cheveux court','Cheveux', false, 60),
    new Prestation('Botox Capillaire + Shampooing + Brushing - Cheveux mi-longs','Cheveux', false, 70),
    new Prestation('Botox Capillaire + Shampooing + Brushing - Cheveux longs','Cheveux', false, 80),

    new Prestation('Cryothérapie Capillaire + Shampooing + Brushing - Cheveux courts','Cheveux', false, 70),
    new Prestation('Cryothérapie Capillaire + Shampooing + Brushing - Cheveux mi-longs','Cheveux', false, 80),
    new Prestation('Cryothérapie Capillaire + Shampooing + Brushing - Cheveux longs','Cheveux', false, 90),
]
>>>>>>> parent of eaf2929 (Ajout des prestations cheveux (datas/prestations.js))
