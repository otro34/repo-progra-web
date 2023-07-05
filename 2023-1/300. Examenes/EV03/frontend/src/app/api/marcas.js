import Base from './base.js'

const endpoint = "/marcas"

const findAll = async () => Base.get(endpoint)

const update = async (request) => Base.put(endpoint, request);

const create = async (request) => Base.put(endpoint, request);

const marcasApi = { findAll, update, create }

export default marcasApi