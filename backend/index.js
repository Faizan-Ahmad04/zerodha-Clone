require('dotenv').config();
const express = require('express');
const { connectToDatabase } = require('./connection');
const cors = require('cors');
const bodyParser = require('body-parser');
const { HoldingsModel } = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');
const cookieParser = require('cookie-parser');
const userRoute = require('./Routes/user');

const app = express();

//MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 80;
const uri = process.env.MONGO_URL;

connectToDatabase(uri);

// The '/addHoldings' route is used to add dummy holdings data to the database.
// You can trigger this by making a GET request to the '/addHoldings' endpoint in the browser.
// Once the data is inserted, a success message will be returned.
// Example URL: http://localhost:80/addHoldings
/*
app.get('/addHoldings', async (req, res) => {
  try {
    const tempHoldings = [
      {
        name: 'BHARTIARTL',
        qty: 2,
        avg: 538.05,
        price: 541.15,
        net: '+0.58%',
        day: '+2.99%',
      },
      {
        name: 'HDFCBANK',
        qty: 2,
        avg: 1383.4,
        price: 1522.35,
        net: '+10.04%',
        day: '+0.11%',
      },
    ];

    await HoldingsModel.insertMany(tempHoldings);

    res.status(200).send('Holdings added successfully!');
  } catch (error) {
    console.error('Error adding holdings:', error);
    res.status(500).send('An error occurred while adding holdings');
  }
});
*/

// The '/addPositions' route is used to add dummy positions data to the database.
// You can trigger this by making a GET request to the '/addPositions' endpoint in the browser.
// Once the data is inserted, a success message will be returned.
// Example URL: http://localhost:80/addPositions
/*
app.get('/addPositions', async (req, res) => {
  let tempPositions = [
    {
      product: 'CNC',
      name: 'EVEREADY',
      qty: 2,
      avg: 316.27,
      price: 312.35,
      net: '+0.58%',
      day: '-1.24%',
      isLoss: true,
    },
    {
      product: 'CNC',
      name: 'JUBLFOOD',
      qty: 1,
      avg: 3124.75,
      price: 3082.65,
      net: '+10.04%',
      day: '-1.35%',
      isLoss: true,
    },
  ];

  tempPositions.forEach(item => {
    let newPosition = new PositionsModel({
      product: item.product,
      name: item.name,
      qty: item.qty,
      avg: item.avg,
      price: item.price,
      net: item.net,
      day: item.day,
      isLoss: item.isLoss,
    });

    newPosition.save();
  });
  res.send('Done!');
});
*/

app.get('/allHoldings', async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get('/allPositions', async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post('/newOrder', async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send('Order saved!');
});

app.use('/', userRoute);

app.listen(PORT, () => console.log(`server is listening on ${PORT}`));
