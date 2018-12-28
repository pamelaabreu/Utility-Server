const {add,multiply} = require('./services/math.js');
const {searchGif} = require('./services/gif.js');
const express = require('express');
const request = require('request');
const app = express();
const port = 44444;

app.get('/math/add', (req, res) => {
    const {query} = req;

    const keyObj = {};
    const keys = Object.entries(query);
    for (const [name, value] of keys) {
        keyObj[name] = parseInt(value);
    }

    res.json(add(keyObj))
})

app.get('/math/multiply', (req, res) => {
    const {query} = req;

    const keyObj = {};
    const keys = Object.entries(query);
    for (const [name, value] of keys) {
        keyObj[name] = parseInt(value);
    }

    res.json(multiply(keyObj))
})

app.get('/gif', (req, res) => {
    const {query} = req;
    // if(req.query !== 'search'){
    //     res.json({error: `You didn't write a search`});
    // }

    res.json(searchGif(query.search))
})

app.listen(port, () => {
    console.log(`listening at port ${port}`)
});


/*NOTES:
    If user inputs ?a=1&a=2,&a=2,
    req.query.a will be [1,2,2]

*/
