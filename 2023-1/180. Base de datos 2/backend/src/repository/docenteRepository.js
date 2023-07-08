import Docente from '../models/docente.js'

const findAll = async () => {
    try {

        return await Docente.findAll();

    } catch(err) {
        console.error(err)

        return null;
    }
}

const create = async (docente) => {
    try {

        const newdocente = await Docente.create(docente);

        return newdocente;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (id) => {
    try {
        return await Docente.findOne({
            where: {
                id
            }
        })
    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const update = async (docente) => {
    try {
        const founddocente =  await Docente.update({
            where: {
                id: curso.id
            }
        })

        founddocente.set(docente)

        founddocente.save()

        return founddocente;

    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const remove = async (id) => {
    try {
        await Docente.destroy({
            where: {
                id
            }
        })

        return true;
    }
    catch(err) {
        console.error(err)
        return null;
    }        

}


const DocenteRepository = { findAll, create, findOne,update, remove };

export default DocenteRepository; 
