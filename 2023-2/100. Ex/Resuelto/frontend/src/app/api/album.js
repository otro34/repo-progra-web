import base from './base'

const endpoint = '/album'

const findAll = async () => base.get(endpoint);

const api = { findAll };

export default api;