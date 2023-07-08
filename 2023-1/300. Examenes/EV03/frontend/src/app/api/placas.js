import Base from './base.js'

const endpoint = "/placas"

const findAll = async () => Base.get(endpoint)

const update = async (request) => Base.put(endpoint, request);

const create = async (request) => Base.post(endpoint, request);

const findOne = async (id) => Base.get(endpoint + "/" + id)

const placasApi = { findAll, update, create, findOne }

export default placasApi