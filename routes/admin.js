let userService = require('./../services/userService');
module.exports = (apiRoutes) => {
    apiRoutes.post('/api/user-registration', userService.userRegistration);
    apiRoutes.post('/api/user-login', userService.userLogin);
};