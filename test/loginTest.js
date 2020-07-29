const assert = require('chai').assert;
const loginUser = require('../public/js').loginUser;

describe('Login', function(){
    it('Should return an email and password entered', function(){
        let result = loginUser();
        assert.equal(result, userData);
    });
});