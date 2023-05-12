# AI Trading App



## About
This the repo for AI Startup Hackathon episode 3
It is a fork from this repo: https://github.com/Louvivien/tradingapp 
This repo integrated Alpaca to this [OktarianTB](https://github.com/OktarianTB/stock-trading-simulator) 


## Installation
Make sure you have NodeJS installed. Then install the required packages for the server with:

```sh
npm install
```

And the required packages for the client with:
```sh
npm run install-client
```


Then run the server with:
```sh
npm run start
```
And run the client with:
```sh
cd client
npm run start
```

## Deployement
The front is optimized to be deployed on Vercel

The back is optimized to be deployed on Render


## To do
Delete const data = require("../config/stocksData") from stockController.

Add loading on the PageTemplate

Manage API limit for tiingo

Optimize live data websocket connection



