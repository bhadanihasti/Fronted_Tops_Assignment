const geocode = require("./geocode")
const weather = require("./weather")

const city = "baroda,gujarat,india"

geocode.geocodedata(city,(err,data)=>{
    if(err){
        console.log("Geocode Error:", err)
        return
    }

    weather.weatherdata(data.lat,data.lng,(err,data)=>{
        if(err){
            console.log("Weather Error:", err)
            return
        }

        console.log(`
city : ${data.city}
temp : ${data.temp}
pressure : ${data.pressure}
humidity : ${data.humidity}
        `)
    })
})