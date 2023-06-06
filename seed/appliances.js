const db = require('../db')
const Appliance = require('../models/appliancesModel')

db.on('error', console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
    const Appliances = [
        {
            Name: 'Microwave Oven NN-SN966S Stainless Steel',
            Brand: 'Panasonic',
            Type: 'microwave',
            Description: 'Panasonic Microwave: This 1250 Watt high power, 2.2 cubic foot capacity stainless steel countertop/built in microwave delivers a seamless stream of cooking power for even cooking and delicious flavor',
            Price: '$240.99',
            Image: 'https://m.media-amazon.com/images/I/71SFQpnYoQL._AC_SX679_.jpg'
        },
        {
            Name: 'COS=12MWDSS 24 in. Built-in Microwave Drawer',
            Brand: 'COSMO',
            Type: 'microwave',
            Description: '1000 WATTS OF POWER: With 11 power levels, cook meals with precise control and delicious results',
            Price: '$1,049.99',
            Image: 'https://m.media-amazon.com/images/I/71i-cJB-eWS._AC_SX679_.jpg'
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