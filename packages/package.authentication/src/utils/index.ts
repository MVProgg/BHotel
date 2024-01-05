import { IUserPayload } from "@bhotel/interfaces"
import jwt from 'jsonwebtoken'

export class Token {

    private readonly payload: IUserPayload
    private readonly secretKey: string
    private readonly publicKey: string

    constructor(payload: IUserPayload, secretKey: string, publicKey: string) {
        this.payload = payload
        this.secretKey = secretKey
        this.publicKey = publicKey
    }

    access() {
        jwt.sign()
    }

    refresh() {
        jwt.sign()
    }
}

export class TokenConfig {
    private readonly issue: string
}