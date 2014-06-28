/**
 * User
 *
 * @module	  :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */
var bcrypt = require('bcrypt');

module.exports = {

    attributes: {
        firstname: {
            type: 'string',
        },
        lastName: {
            type: 'string'
        },
        email: {
            type: 'email',
            required: true,
            unique: true
        },
        passports: {
            collection: 'Passport',
            via: 'user'
        },
        toJSON: function() {
            var obj = this.toObject();
            delete obj.password;
            return obj;
        }
    },

    // beforeCreate: function(user, cb) {
    //     bcrypt.genSalt(10, function(err, salt) {
    //         bcrypt.hash(user.password, salt, function(err, hash) {
    //             if (err) {
    //                 console.log(err);
    //                 cb(err);
    //             } else {
    //                 user.password = hash;
    //                 cb(null, user);
    //             }
    //         });
    //     });
    // }

};
