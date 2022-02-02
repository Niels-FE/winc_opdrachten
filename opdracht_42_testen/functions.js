const functions = {
    isNull: function () {
        return null;
    },
    checkValue: function (x) {
        return x;
    },
    createUser: function () {
        const user = {
            firstName: 'Brad'
        };
        user['lastName'] = 'Traversy';
        return user;
    }
};
console.log(functions.checkValue());
module.exports = functions;