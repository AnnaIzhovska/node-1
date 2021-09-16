const contactsOperations = require("./contacts");
const argv = require('yargs').argv;

async function invokeAction({ action, id, name, email, phone }) {
  // try {
    switch (action) {
      case "list":
        const contacts = await contactsOperations.listContacts();
        console.table(contacts);
        break;
         
      case "get":
        const contactById = await contactsOperations.getContactById(id);
        console.log(contactById);
        break;

      case "add":
        const addContacts = await contactsOperations.addContact({ name, email, phone });
        console.log(addContacts);
        break;
      
      case "remove":
        await contactsOperations.removeContact(id);
        console.log("Success remove");
        break;
      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  // } catch (error) {
  //   throw error;
  // }
}

invokeAction(argv);

//  // index.js
//  const argv = require('yargs').argv;

//  // TODO: рефакторить
//  function invokeAction({ action, id, name, email, phone }) {
//    switch (action) {
//      case 'list':
//       const contacts = await contactsOperations.listContacts();
//       console.table(contacts);
//        break;
 
//      case 'get':
//         console.log('id',id)
//        break;
 
//      case 'add':
//       console.log( 'name email phone', name, email, phone)
//        break;
 
//      case 'remove':
//        console.log('id',id)
//        break;
 
//      default:
//        console.warn('\x1B[31m Unknown action type!');
//    }
//  }
 
//  invokeAction(argv);