const functions = require('./functions.js');
test('Should be null', () => {
    // Start with expect()
    // Inside the first brackets put what you want to test. That will be a function.
    // Then follows your .toBeSomethingSomething function,
    // find the appropriate function in the documentation.
    // In this case we want to check if the function "isNull()" actually
    // returned null. So "toBeNull()" makes the most sense
    expect(functions.isNull()).toBeNull();
})

test('checkValue should be falsy when argument is undefined', () => {
    expect(functions.checkValue()).toBeFalsy();
})
test('User should be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({ firstName: "Brad", lastName: "Traversy" });
})
test('Should be under or equal to 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeGreaterThanOrEqual(1600);
})
test('there is no I in team', () => {
    expect('team').not.toMatch('/I/');
})
test('Admin should be in usernames', () => {
    const usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
})