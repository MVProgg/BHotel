"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Token {
    constructor(payload, secretKey) {
        this.accessToken = '';
        this.refreshToken = '';
        this.payload = payload;
        this.secretKey = secretKey;
    }
    access() {
        if (this.accessToken === '' || this.accessToken === undefined) {
            this.accessToken = jsonwebtoken_1.default.sign(this.payload, this.secretKey, {
                algorithm: 'HS256',
                expiresIn: 60 * 5,
                issuer: 'api.constructum.io'
            });
        }
    }
    refresh() {
        if (this.refreshToken === '' || this.refreshToken === undefined) {
            jsonwebtoken_1.default.sign(this.payload, this.secretKey, {
                algorithm: 'HS256',
                expiresIn: 60 * 60 * 12,
                issuer: 'api.constructum.io'
            });
        }
    }
}
exports.Token = Token;
