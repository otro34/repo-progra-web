import base from './base'

const endpoint = '/carrito'

const findAll = async () => base.get(endpoint);
const addItem = async (album) => base.post(endpoint+"/item",album);
const remove = async (id) => base.remove(endpoint+"/"+id);
const removeAll = async() => base.remove(endpoint);

const api = { findAll, addItem, remove, removeAll };

export default api;