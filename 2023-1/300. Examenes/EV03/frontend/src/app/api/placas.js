import Base from './base.js'

const endpoint = "/placas"

const findAll = async () => Base.get(endpoint)

const update = async (request) => Base.put(endpoint, request);

const create = async (request) => Base.put(endpoint, request);

const placasApi = { findAll, update, create }

export default placasApi