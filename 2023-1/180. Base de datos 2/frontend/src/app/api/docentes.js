import Base from './base'

const endpoint = '/docentes';

const create = async (request) => await Base.post(endpoint,request);

const findAll = async() => await Base.get(endpoint);

const findOne = async(id) => {
    const newEndpoint = endpoint.concat('/',id); //http://localhost:3001/docentes/1

    return await Base.get(newEndpoint);
}

const update = async(request) => await Base.put(endpoint,request);

const remove = async(id) => {
    const newEndpoint = endpoint.concat('/',id);

    return await Base.remove(newEndpoint);
}

const docentesApi = { create, findAll, findOne, update, remove }

export default docentesApi;