import { IUserPayload } from '@bhotel/interfaces'
import jwt from 'jsonwebtoken'

export class Token {
	private readonly payload: IUserPayload
	private readonly secretKey: string
    private accessToken: string = ''
    private refreshToken: string = ''

	constructor(payload: IUserPayload, secretKey: string) {
		this.payload = payload
		this.secretKey = secretKey
	}

	access(): void {
        if (this.accessToken === '' || this.accessToken === undefined) {
            this.accessToken = jwt.sign(this.payload, this.secretKey, {
                algorithm: 'HS256',
                expiresIn: 60 * 5,
                issuer: 'api.constructum.io'
            })
        }
	}

	refresh(): void {
        if (this.refreshToken === '' || this.refreshToken === undefined) {
            jwt.sign(this.payload, this.secretKey, {
                algorithm: 'HS256',
                expiresIn: 60 * 60 * 12,
                issuer: 'api.constructum.io'
            })
        }
	}
}
