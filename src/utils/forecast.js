const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/276281cff7912c342a0152986acd8b6a/' + latitude + ',' + longitude

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const temperature = body.currently.temperature
            const windChance = body.currently.precipProbability
            
            callback(undefined, body.daily.data[0].summary + " It is currently " + temperature + " degrees out. The high today is " + body.daily.data[0].temperatureHigh + " with a low of " + body.daily.data[0].temperatureLow + " There is a " + windChance + "% chance of rain")

        }
    })

}

module.exports = forecast