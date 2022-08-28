import axios from 'axios';

const API_KEY = '4KV9Chpg2H2cGNoEZkUT6nJwkLvlEuMx';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';

axios.defaults.baseURL = BASE_URL;

export const getEvents = async () => {
  const response = await axios.get(`events?size=20&apikey=${API_KEY}`);
    return response.data._embedded.events
};

export const renderMoreInfo = async (id) => {
    const response = await axios.get(`events/${id}?apikey=${API_KEY}
`);
    return response
}
