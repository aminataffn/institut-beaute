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
};

class Category {
    constructor(name) {
        this.name = name;
        this.prestations = [];
    }
     addNewPrestation(name, duration, isFixedPrice, price, description){
        const prest = new Prestation(name, this.name, duration, isFixedPrice, price, description);
        this.prestations.push(prest);
     }
};

export const categories = [new Category('Cheveux'), new Category('Rituels Hammam & Soins du corps'), new Category('Soins du visage'), new Category('Onglerie'), new Category('Esthétique'), new Category('Spa'), new Category('Privatisations')];

/* Prestations : Cheveux (categories[0]) */
categories[0].addNewPrestation('Brushing', '1 heures', true, 20, 'Shampoing + Brushing - Cheveux courts');
categories[0].addNewPrestation('Brushing', '1 heures', true, 25,  'Shampoing + Brushing - Cheveux mi-longs');
categories[0].addNewPrestation('Brushing', '1 heures', true, 30,  'Shampoing + Brushing - Cheveux longs');
categories[0].addNewPrestation('Lissage Nano Indien', '2 heures', false, 180, 'Lissage Nano Indien + Shampooing + Brushing - Cheveux courts');
categories[0].addNewPrestation('Lissage Nano Indien', '2 heures', false, 190, 'Lissage Nano Indien + Shampooing + Brushing - Cheveux mi-longs');
categories[0].addNewPrestation('Lissage Nano Indien', '2 heures', false, 200, 'Lissage Nano Indien + Shampooing + Brushing - Cheveux longs');
categories[0].addNewPrestation('Lissage Tanin', '2 heures', false, 120, 'Lissage Tanin + Shampooing + Brushing - Cheveux courts');
categories[0].addNewPrestation('Lissage Tanin', '2 heures', false, 130, 'Lissage Tanin + Shampooing + Brushing - Cheveux mi-longs');
categories[0].addNewPrestation('Lissage Tanin', '2 heures', false, 140, 'Lissage Tanin + Shampooing + Brushing - Cheveux longs');
categories[0].addNewPrestation('Lissage Organic Gold', '2 heures', false, 140, 'Lissage Organic Gold + Shampooing + Brushing - Cheveux courts');
categories[0].addNewPrestation('Lissage Organic Gold', '2 heures', false, 150, 'Lissage Organic Gold + Shampooing + Brushing - Cheveux mi-longs');
categories[0].addNewPrestation('Lissage Organic Gold', '2 heures', false, 160, 'Lissage Organic Gold + Shampooing + Brushing - Cheveux longs');
categories[0].addNewPrestation('Botox Capillaire', '2 heures', false, 60, 'Botox Capillaire + Shampooing + Brushing - Cheveux court');
categories[0].addNewPrestation('Botox Capillaire', '2 heures', false, 70, 'Botox Capillaire + Shampooing + Brushing - Cheveux mi-longs');
categories[0].addNewPrestation('Botox Capillaire', '2 heures', false, 80, 'Botox Capillaire + Shampooing + Brushing - Cheveux longs');
categories[0].addNewPrestation('Cryothérapie Capillaire', '2 heures', false, 70, 'Cryothérapie Capillaire + Shampooing + Brushing - Cheveux courts');
categories[0].addNewPrestation('Cryothérapie Capillaire', '2 heures', false, 80, 'Cryothérapie Capillaire + Shampooing + Brushing - Cheveux mi-longs');
categories[0].addNewPrestation('Cryothérapie Capillaire', '2 heures', false, 90, 'Cryothérapie Capillaire + Shampooing + Brushing - Cheveux longs');

/* Prestations : Soins du visage (categories[1]) */
/* Prestations : Soins du corps (categories[1]) */
/* Prestations : Onglerie (categories[1]) */
/* Prestations : Esthétique (categories[1]) */
/* Prestations : Privatisation (categories[1]) */