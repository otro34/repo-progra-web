import base from './base.js'

const endpoint = '/matricula';

const findAll = async () => await base.get(endpoint);

const findAllComplete = async () => await base.get(endpoint + '/findAllComplete');

const create = async (payload) => await base.post(endpoint, payload)

const api = { findAll, create, findAllComplete }

export default api;