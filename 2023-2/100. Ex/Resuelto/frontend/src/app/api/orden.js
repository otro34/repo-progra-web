import base from './base'

const endpoint = '/orden'

const findAll = async () => base.get(endpoint);
const create = async(payload) => base.post(endpoint,payload);

const api = { findAll,create };

export default api;