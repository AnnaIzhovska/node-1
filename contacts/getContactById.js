const contacts = require('../db/contacts.json');

const getContactById = async(id) => {
    const contact = contacts.find(item => item.id === id)
    if (!contact) {
        return null;
    }
    return contact;
}

module.exports = getContactById;
