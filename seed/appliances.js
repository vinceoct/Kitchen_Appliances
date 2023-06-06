const db = require('../db')
const Appliance = require('../models/appliancesModel')

// db.on('error', console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
    const Appliances = [
        {
            name: 'Microwave Oven',
            brand: 'Panasonic',
            type: 'Microwave',
            description: 'Panasonic Microwave: This 1250 Watt high power, 2.2 cubic foot capacity stainless steel countertop/built in microwave delivers a seamless stream of cooking power for even cooking and delicious flavor.',
            price: '$240.99',
            image: 'https://m.media-amazon.com/images/I/71SFQpnYoQL._AC_SX679_.jpg'
        },

        {
            name: 'Built-in Microwave Drawer',
            brand: 'COSMO',
            type: 'Microwave',
            description: '1000 WATTS OF POWER: With 11 power levels, cook meals with precise control and delicious results.',
            price: '$1,049.99',
            image: 'https://m.media-amazon.com/images/I/71i-cJB-eWS._AC_SX679_.jpg'
        },

        {
            name: 'French Door Smart Refrigerator',
            brand: 'LG',
            type: 'Refrigerator',
            description: 'Store more food with an Ultra-Large Capacity refrigerator. Fingerprint resistant finish & Slim SpacePlus ice door system. Smart Home & Wi-Fi enabled to operate & troubleshoot on phone app.',
            price: '$1,898',
            image: 'https://images.thdstatic.com/productImages/27117e7c-8a29-4d9b-be95-d268696c0292/svn/printproof-stainless-steel-lg-french-door-refrigerators-lfxs26973s-64_600.jpg'
        },

        {
            name: 'Kimchi and Beverage 4-Door French Door Refrigerator',
            brand: 'Samsung',
            type: 'Refrigerator',
            description: 'Precise temperatures for tastier kimchi. Easily converts from fridge to freezer. Stainless steel panels help maintain consistent temperatures.',
            price: '$1,798',
            image: 'https://images.thdstatic.com/productImages/cd9ced88-8f9e-4d38-94ce-d0e9eac6c1f3/svn/white-glass-and-navy-samsung-french-door-refrigerators-rq48t94b277-66_600.jpg'
        },

        {
            name: 'Insta Pot Vortex',
            brand: 'Instant',
            type: 'Airfryer',
            description: 'Air fryers from Instant, the same brand that makes Instant Pot multicookers, have been on our list of best air fryers since we started testing them. The ones we tested, including this one, are easy to program and high-performing. This one particularly stands out for its see-through window design, which allows you to peer inside without pulling out the basket.',
            price: '$117',
            image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1639092453-411xmojvHOL._SL500_.jpg?crop=1xw:1.00xh;center,top&resize=980:*'
        },

        {
            name: 'Ninja Air Fryer Max',
            brand: 'Ninja',
            type: 'Airfryer',
            description: 'This 5.5-quart basket-style Ninja Air Fryer Max XL was the top performer in our air fryer test. It scored the highest marks across the board for ease of use, thanks to its intuitive, easy-to-read buttons and clear and useful owners manual. During our tests, the air fryer basket slid in and out easily, which made handling a breeze.',
            price: '$170',
            image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1673637883-Ninja5.5QtAirFryer.jpg?crop=1xw:1.00xh;center,top&resize=980:*'
        }

    ]
    await Appliance.insertMany(Appliances)
    console.log('Placed Appliances.') 
}
const run = async () => {
    await main()
    db.close()

}

run()