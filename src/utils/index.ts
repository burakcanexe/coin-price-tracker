const axios = require('axios');

const options = {
    method: 'GET',
    url: process.env.RAPID_URL,
    params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        'tiers[0]': '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '50',
        offset: '0'
    },
    headers: {
        'X-RapidAPI-Key': process.env.RAPID_KEY,
        'X-RapidAPI-Host': process.env.RAPID_HOST
    }
};

export const getCoins = async () => {
    try {
        const response = await axios.request(options);
        console.log(response.data);
        if (response.data.status === 'success') {
            return response.data.data.coins
        }
    } catch (error) {
        console.error(error);
    }
}
