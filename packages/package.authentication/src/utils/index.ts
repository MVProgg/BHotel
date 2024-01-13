import { IUserPayload } from '@bhotel/interfaces'
import jwt from 'jsonwebtoken'

export class Token {
	private readonly payload: IUserPayload
	private readonly secretKey: string
    private accessToken: string = ''
    private refreshToken: string = ''

    public get access(): string {
        return this.accessToken
    }

    public get refresh(): string {
        return this.refreshToken
    }

	constructor(payload: IUserPayload, secretKey: string) {
		this.payload = payload
		this.secretKey = secretKey
	}

	generateAccess(): void {
        if (this.accessToken === '' || this.accessToken === undefined) {
            this.accessToken = jwt.sign(this.payload, this.secretKey, {
                algorithm: 'HS256',
                expiresIn: 60 * 5,
                issuer: 'api.constructum.io'
            })
        }
	}

	generateRefresh(): void {
        if (this.refreshToken === '' || this.refreshToken === undefined) {
            jwt.sign(this.payload, this.secretKey, {
                algorithm: 'HS256',
                expiresIn: 60 * 60 * 12,
                issuer: 'api.constructum.io'
            })
        }
	}
}
