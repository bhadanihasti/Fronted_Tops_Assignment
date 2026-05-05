
const weatherdata = (lt, lg,callback) => {


    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lt}&lon=${lg}&appid=f7e41ce7e70845cc2b06568cfc7cfb4c&units=metric`

    fetch(url).then(resp => {
        return resp.json()
    }).then(result => {
        var city = result.name
        var temp = result.main.temp
        var pressure = result.main.pressure
        var humidity = result.main.humidity

        // console.log(`
        
        // City : ${city}
        // Temp : ${temp}
        // Pressure : ${pressure}
        // Humidity  : ${humidity}
        
        
        // `);

        callback({city,temp,pressure,humidity})

    }).catch(err => {
        callback(undefined,err)
    })


}


module.exports = { weatherdata }