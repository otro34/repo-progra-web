

const create = (arr, object) => {
    arr.push(object)
    return object;
}

const findOne = (arr, id) => {
    const result = arr.find(x => x.id == id);
    return result;
}

const update = (arr, object) => {
    const index = arr
        .findIndex(item => item.id === object.id);

    if (index > -1) {
        arr[index] = object;
        return object;
    } else {
        return null;
    }
    
}

const remove = (arr, id) => {
    const index = arr.findIndex(item => item.id == id);

    if (index > -1) {
        arr.splice(index,1);
        return true;
    } else  
        return false;

}

const repositoryBase = { create, findOne, update,remove }

export default repositoryBase;