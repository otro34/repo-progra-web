import Base from './base.js'

const endpoint = "/placas"

const findAll = async () => Base.get(endpoint)

const placasApi = { findAll }

export default placasApi