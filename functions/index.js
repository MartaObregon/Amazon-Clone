const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors');

const stripe = require('stripe')('sk_test_51Hj19rEjLGUVpd9dAv3H5Bq9yXogFsx2HfjYWLeEHvnutD5df5tVBKpdQzuwZLXIZizABxiRsKlYNhZl9W52H6P7007sakqB5M')

//build a express app full back end in a cloud function
//API

//App config
const app = express();

//Middlewares
app.use(cors({origin: true}));
app.use(express.json());


//API routes
app.get('/', (req, res)=>{
    res.status(200).send('Running')
})

app.post('/payment/create', async (req, res)=>{
    const total = req.query.total;
    console.log('payment request received BOOM! for this amount:', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //in subunits (with cents)
        currency:'eur',
    });
    //201 = OK & Created
    res.status(201).send({
        clientSecret:paymentIntent.client_secret
    })
})


//Listen command

exports.api = functions.https.onRequest(app)


//Example endpoint
//http://localhost:5001/clone-c1d79/us-central1/api

