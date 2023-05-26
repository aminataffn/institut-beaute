class Prestations {
    constructor(name, category, subcategory, isFixedPrice, price) {
        this.name = name;
        this.category = category;
        this.subcategory = subcategory;
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
export const prestations = [ 
    new Prestations('Shampoing + Brushing - Cheveux courts','Cheveux', 'Brushing', true, 20),
    new Prestations('Shampoing + Brushing - Cheveux mi-longs','Cheveux', 'Brushing', true, 25),
    new Prestations('Shampoing + Brushing - Cheveux longs','Cheveux', 'Brushing', true, 30),
    
    new Prestations('Lissage Nano Indien + Shampooing + Brushing - Cheveux courts','Cheveux', 'Lissage Nano Indien', false, 180),
    new Prestations('Lissage Nano Indien + Shampooing + Brushing - Cheveux mi-longs','Cheveux', 'Lissage Nano Indien', false, 190),
    new Prestations('Lissage Nano Indien + Shampooing + Brushing - Cheveux longs','Cheveux', 'Lissage Nano Indien', false, 200),

    new Prestations('Lissage Tanin + Shampooing + Brushing - Cheveux courts','Cheveux', 'Lissage Tanin', false, 120),
    new Prestations('Lissage Tanin + Shampooing + Brushing - Cheveux mi-longs','Cheveux', 'Lissage Tanin', false, 130),
    new Prestations('Lissage Tanin + Shampooing + Brushing - Cheveux longs','Cheveux', 'Lissage Tanin', false, 140),

    new Prestations('Lissage Organic Gold + Shampooing + Brushing - Cheveux courts','Cheveux', 'Lissage Organic Gold', false, 140),
    new Prestations('Lissage Organic Gold + Shampooing + Brushing - Cheveux mi-longs','Cheveux', 'Lissage Organic Gold', false, 150),
    new Prestations('Lissage Organic Gold + Shampooing + Brushing - Cheveux longs','Cheveux', 'Lissage Organic Gold', false, 160),

    new Prestations('Botox Capillaire + Shampooing + Brushing - Cheveux court','Cheveux', 'Botox Capillaire', false, 60),
    new Prestations('Botox Capillaire + Shampooing + Brushing - Cheveux mi-longs','Cheveux', 'Botox Capillaire', false, 70),
    new Prestations('Botox Capillaire + Shampooing + Brushing - Cheveux longs','Cheveux', 'Botox Capillaire', false, 80),

    new Prestations('Cryothérapie Capillaire + Shampooing + Brushing - Cheveux courts','Cheveux', 'Cryothérapie Capillaire', false, 70),
    new Prestations('Cryothérapie Capillaire + Shampooing + Brushing - Cheveux mi-longs','Cheveux', 'Cryothérapie Capillaire', false, 80),
    new Prestations('Cryothérapie Capillaire + Shampooing + Brushing - Cheveux longs','Cheveux', 'Cryothérapie Capillaire', false, 90),
]