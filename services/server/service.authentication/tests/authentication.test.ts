import { describe, test, expect } from '@jest/globals'
import { Token } from '@bhotel/authentication'

describe('token checking', () => {
    const token: Token = new Token(
        { uid: '43254345345', login: 'log1n41k', email: 'my-mail@google.com', password: 'fhg7863hjfe8903fewk;' },
        'super seecret phrase'
    )

	test('token creation instance', () => {
        expect(token).toBeDefined()
	})

    test('generating access token', () => {
        
    })

    test('generating refresh token', () => {})
})
