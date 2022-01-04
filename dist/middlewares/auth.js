"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authUser = exports.authPage = void 0;
const authPage = (req, res, next) => {
    console.log("ADMIN authenticated");
    next();
};
exports.authPage = authPage;
const authUser = (permissions) => {
    return (req, res, next) => { };
};
exports.authUser = authUser;
//# sourceMappingURL=auth.js.map