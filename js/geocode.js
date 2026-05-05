const fetch = require('node-fetch');

const geocodedata = (city, callback) => {

    const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=9b7f9716f2ab4bd8b8d774425f3c5997`

    fetch(url)
        .then(resp => resp.json())
        .then(data => {

            if (!data.results || data.results.length === 0) {
                return callback("No location found", undefined)
            }

            const lat = data.results[0].geometry.lat
            const lng = data.results[0].geometry.lng

            callback(null, { lat, lng })

        })
        .catch(err => {
            callback(err, undefined)
        })
}

module.exports = { geocodedata }