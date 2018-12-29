const request = require('request');

const gif = {};

gif.searchGif = (search, cb) => {

        const api_key = `02QCU6RW3UFQoJvWti2qN42ya222mCcX`;
        const limit = 25;
        const url = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${api_key}&limit=${limit}`;
        
        
        request(url, function (error, response, body) {
            const data = JSON.parse(body);
            let urls = []
            for (const image of data.data) {
                let imgUrl = image.images.original.url;
                urls.push(imgUrl);
            }
            // return urls;
            cb(urls)
        });

}

module.exports = gif;