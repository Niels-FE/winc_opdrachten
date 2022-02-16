const verifyPassword = require('./verifypassword.js');


test('is not null', () => {
    expect(verifyPassword.isNotNull('abc')).toBe(true);
    expect(verifyPassword.isNotNull(null)).toBe(false);
});

test('is smaller then 9', () => {
    expect(verifyPassword.hasRightLength('wordsof8')).toBe(true);
    expect(verifyPassword.hasRightLength('wordsof10-')).toBe(false);
});

test('has uppercase', () => {
    expect(verifyPassword.hasUpperCaseCharacter("Hallo")).toBe(true);
    expect(verifyPassword.hasUpperCaseCharacter("123")).toBe(false);
    expect(verifyPassword.hasUpperCaseCharacter("hallo")).toBe(false);
});
test('has lowercase', () => {
    expect(verifyPassword.hasLowerCaseCharacter("HALLO")).toBe(false);
    expect(verifyPassword.hasLowerCaseCharacter("123")).toBe(false);
    expect(verifyPassword.hasLowerCaseCharacter("hallo")).toBe(true);
    expect(verifyPassword.hasLowerCaseCharacter("Hallo")).toBe(true);
});
test('has digits', () => {
    expect(verifyPassword.hasDigit('123')).toBe(true);
    expect(verifyPassword.hasDigit('123halloe')).toBe(true);
    expect(verifyPassword.hasDigit('hallo')).toBe(false);
});
