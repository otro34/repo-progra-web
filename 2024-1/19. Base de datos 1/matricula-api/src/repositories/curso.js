import model from '../models/curso.js'

let cursos = [];

const findAll = async () => {

    try {
        const res  = await model.findAll();
        console.log(res)
        return res
    } catch (error) {
        console.log(error);
        return null;
    }

}

const create = async (payload) => {
    try {
        const res = await model.create(payload);
        return res;
    } catch (error) {
        console.log(error);
        return null;
    }

}

const findOne = (id) => {
    const result = cursos.find(x => x.id === parseInt(id));

    return result;
}

const remove = (id) => {
    const index = cursos.findIndex(item => item.id == id);

    if (index > -1) {
        cursos.splice(index,1);
        return true;
    } else return false;
}

const update = (payload) => {
    const index = cursos.findIndex(item => item.id == payload.id);

    if (index > -1) {
        cursos[index] = payload;
        return payload;
    }
    else
        return null;
}

const repository = { findAll, create, findOne, remove, update }

export default repository;