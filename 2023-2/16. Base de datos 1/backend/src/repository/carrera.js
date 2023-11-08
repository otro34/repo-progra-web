import modelo from '../model/carrera.js'

let arr = [];

const findAll = async () => {
    try {
        const result = await modelo.findAll();
        console.debug(result);
        return result;
    } catch(err) {
        console.error(err);
        return null;
    }
    
}

const create = async (object) => {
    try {
        return await modelo.create(object)
    } catch(err) {
        console.error(err);
        return null;
    }
    
}

const findOne = (id) => {
    const result = arr.find(x => x.id == id);
    return result;
}

const update = (object) => {
    const index = arr
        .findIndex(item => item.id === object.id);

    if (index > -1) {
        arr[index] = object;
        return object;
    } else {
        return null;
    }
    
}

const remove = (id) => {
    const index = arr.findIndex(item => item.id == id);

    if (index > -1) {
        arr.splice(index,1);
        return true;
    } else  
        return false;

}

const repository = { findAll, create, findOne, update,remove }

export default repository;