"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/users', (req, res) => {
    res.json({ users: 'allusers' });
});
app.get('/users/1', (req, res) => {
    res.json({ users: 'user 1' });
});
if (process.env.TYPE !== 'test') {
    app.listen(process.env.PORT, () => {
        console.log(`App listening on http://localhost:${process.env.PORT}`);
    });
}
exports.default = app;
