import Base from './base.js'

const endpoint = "/modelos"

const findAll = async () => Base.get(endpoint)

const update = async (request) => Base.put(endpoint, request);

const create = async (request) => Base.put(endpoint, request);

const modelosApi = { findAll, update, create }

export default modelosApi