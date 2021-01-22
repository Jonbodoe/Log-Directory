require('dotenv').config();

const express = require('express');
const cors = require('cors')
// const bodyParser = require('body-parser')
// const path = require('path');
const app = express();
const needle = require('needle');

app.use(cors())
// app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    // console.log('ehllo');
    res.send('hello')
});

app.get('/check', async function (req, res) {

    const endpointUrl = 'https://api.twitter.com/2/tweets/search/recent'

    // async function getRequest() {
    // Edit query parameters below
    const params = {
        'query': 'from:twitterdev -is:retweet',
        'tweet.fields': 'author_id'
    }

    const response = await needle('get', endpointUrl, params, {
        headers: {
            'authorization': `Bearer ${process.env.TWITTER_BEARERTOKEN}`
        }
    })

    if (response.body) {
        return res.json(response.body);
    } else {
        throw new Error('Unsuccessful request')
    }
})


app.listen(process.env.PORT || 8080);