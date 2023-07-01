import axios from 'axios'

const URI = 'http://localhost:3001';

const get = async (endpoint) => {
    try {
        const url = URI.concat(endpoint)

        return await axios.get(url);

    } catch (err) {
        console.error(err)
        return null;
    }
}

const Base = { get }

export default Base
