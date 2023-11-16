const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
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
        'X-RapidAPI-Key': 'd9fcbe7ed7mshc7d16cbb7c1a734p1c585ejsnda238d464973',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
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
