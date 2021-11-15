// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//is date tests
test('true isdate 1',() =>{
    expect(functions.isDate('02/15/1993')).toBe(true);
});
test('true isdate 2',() =>{
    expect(functions.isDate('06/12/2015')).toBe(true);
});
test('false isdate 1',() =>{
    expect(functions.isDate('02/15/18907')).toBe(false);
});
test('false isdate 2',() =>{
    expect(functions.isDate('223/15/1890')).toBe(false);
});

//phone number tests
test('true isphoneNumber 1',() =>{
    expect(functions.isPhoneNumber('(626) 639-9028')).toBe(true);
});
test('true isphoneNumber 2',() =>{
    expect(functions.isPhoneNumber('686-939-8888')).toBe(true);
});
test('false isphoneNumber 1',() =>{
    expect(functions.isPhoneNumber('996 837 9028')).toBe(false);
});
test('false isphoneNumber 2',() =>{
    expect(functions.isPhoneNumber('999-939-888')).toBe(false);
});

//email tests
test('true isEmail 1',() =>{
    expect(functions.isEmail('123@gmail.com')).toBe(true);
});
test('true isEmail 2',() =>{
    expect(functions.isEmail('123@yahoo.com')).toBe(true);
});
test('false isEmail 1',() =>{
    expect(functions.isEmail('123yahoo.com')).toBe(false);
});
test('false isEmail 2',() =>{
    expect(functions.isEmail('balonieboi**@yahoo.io')).toBe(false);
});

// is strong password tests
test('true isStrongPassword 1',() =>{
    expect(functions.isStrongPassword('Qwht6')).toBe(true);
});
test('true isStrongPassword 2',() =>{
    expect(functions.isStrongPassword('KJHASKddj')).toBe(true);
});
test('false isStrongPassword 1',() =>{
    expect(functions.isStrongPassword('kjdhsaui*asdjksa')).toBe(false);
});
test('false isStrongPassword 2',() =>{
    expect(functions.isStrongPassword('kjdhsauisakdlas;dekuja')).toBe(false);
});

//is hex color tests
test('true isHexColor 1',() =>{
    expect(functions.isHexColor('#A1C')).toBe(true);
});
test('true isHexColor 2',() =>{
    expect(functions.isHexColor('#FFF')).toBe(true);
});
test('false isHexColor 1',() =>{
    expect(functions.isHexColor('R 256, G78, B90')).toBe(false);
});
test('false isHexColor 2',() =>{
    expect(functions.isHexColor('#ADSDJ15')).toBe(false);
});