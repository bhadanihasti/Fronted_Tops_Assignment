const fetch = require('node-fetch');

const getTimezone = (lat, lng, callback) => {
    const apiKey = "india"

    const url = `http://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=position&lat=${lat}&lng=${lng}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.status !== "OK") {
                return callback("Unable to fetch timezone", undefined)
            }

            callback(null, {
                country: data.countryName,
                zone: data.zoneName,
                time: data.formatted
            })
        })
        .catch(err => {
            callback(err, undefined)
        })
}

// 🔥 Test
getTimezone(21.1702, 72.8311, (err, data) => {
    if (err) return console.log(err)

    console.log(data)
})