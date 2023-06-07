class Prestation {
    constructor(name, category, isFixedPrice, price) {
        this.name = name;
        this.category = category;
        this.isFixedPrice = isFixedPrice;
        this.price = price;
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
     addNewPrestation(name, isFixedPrice, price){
        const prestation = new Prestation(name, this.name, isFixedPrice, price)
        this.prestations.push(prestation)
     }
}

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

export const categories = ['Cheveux']
export const subcategories = ['Brushing', 'Lissage Nano Indien', 'Lissage Tanin', 'Lissage Organic Gold', 'Botox Capillaire', 'Cryothérapie Capillaire']