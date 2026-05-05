





const weatherdata = (lt, lg) => {

    return new Promise((resolve, reject) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lt}&lon=${lg}&appid=f7e41ce7e70845cc2b06568cfc7cfb4c&units=metric`

        fetch(url).then(resp => {
            return resp.json()
        }).then(result => {
            var city = result.name
            var temp = result.main.temp
            var pressure = result.main.pressure
            var humidity = result.main.humidity



            resolve({ city, temp, pressure, humidity })

        }).catch(err => {
            reject(err)
        })
    })



}



const geocodedata = (city) => {

    return new Promise((resolve, reject) => {
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=68eec9e1c5d3434d9f78a77944bbb904`


        fetch(url).then(resp => {
            return resp.json()
        }).then(data => {
            const lat = data.results[0].geometry.lat
            const lng = data.results[0].geometry.lng


            resolve({ lat, lng })


        }).catch(err => {
            reject(err)

        })

    })


}

const getWeather = () => {

    const location = document.getElementById("location").value
    geocodedata(location).then(result => {
        return weatherdata(result.lat, result.lng)
    }).then(data => {

        city.innerHTML = data.city
        temp.innerHTML = data.temp
        pressure.innerHTML = data.pressure
        humidity.innerHTML = data.humidity

    }).catch(err => {
        console.log(err);

    })

}


