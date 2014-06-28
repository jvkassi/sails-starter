var chai = require('chai'),
    assert = chai.assert,
    // assert = require('assert')
    expect = chai.expect,
    Sails = require('sails'),
    barrels = require('barrels');

// Global before hook
before(function(done) {
    // Lift Sails with test database
    Sails.lift({
        log: {
            level: 'error'
        },
        adapters: {
            default: 'test'
        }
    }, function(err, Sails) {
        if (err)
            return done(err);

        barrels.populate(function(err) {
            done(err, Sails);
        });
        // Save original objects in `fixtures` variable
        fixtures = barrels.objects;
        // Load fixtures
    });
});


// Global after hook
after(function(done) {
    console.log();
    Sails.lower(done);
});

// Here goes a module test
describe('User', function() {
    describe('create()', function() {
        it('should create new user', function(done) {
            // console.log(User)
            User.create({
                firstName: 'Walter Jr',
                lastName: 'test',
                email: 'test@smile.ci'
            }).exec(function createCB(err, user) {
                console.log(err);
                done(err);
            })

        });
    })
    describe('update()', function() {
        it('should update a record', function() {
            User.update({
                email: 'jean.kassi@smsile.ci'
            }, function(err, user) {
                console.log('a')
                expect(user['email']).to.be.equal('jean.kassi@smiaale.ci')
            })
        });
    });
    describe('destroy()', function() {
        it('should destroy a record');
    });
    describe('find()', function() {
        it('should return a record');
    });

});

// describe('Login')
