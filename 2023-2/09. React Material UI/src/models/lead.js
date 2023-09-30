export default class Lead {
    id
    name
    lastname
    phone
    constructor (raw) {
        if (!raw) return 

        const {
            id,
            name,
            lastname,
            phone
        } = raw

        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.phone = phone;
    }
}