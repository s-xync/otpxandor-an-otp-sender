const mongoose = require('mongoose');
const Contact = require('../models/contact');
const Otp = require('../models/otp');
const contacsData = require('./database.json');

const setupDatabase = () => {
  // opts and contacts have to be emptied before setting up initial database
  // static json file will be read which contains contacts information
  Otp.remove({}, (err) => {
    Contact.remove({}, (err) => {
      console.log('contacts, otps dropped!');
      contacsData.forEach((newContact) => {
        if(newContact.lastName && newContact.firstName && newContact.phoneNumber){
          Contact.create(newContact, (err, contact) => {
            if(err){
              console.log(err);
            }
          });
        }
      });
      console.log("static data setup done!");
    });
  });
};

module.exports = setupDatabase;