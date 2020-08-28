const dataStore = require('./store/dataStore')

const weatherBycity = async (res,req) => {
    try {
        const weather = await dataStore.getWeatherByCity()
        res.json(weather)

    }
}
}