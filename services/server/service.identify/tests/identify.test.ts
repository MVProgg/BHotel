import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import { IdentifyTRPCRouter } from '@bhotel/identify'
import { describe, expect, test } from '@jest/globals'
import { Client } from 'pg'

describe('tRPC tests', () => {
	test('creating tRPC client (not be undefined)', () => {
		const trpc = createTRPCProxyClient<IdentifyTRPCRouter>({
			links: [
				httpBatchLink({
					url: 'http://127.0.0.1:3000'
				})
			]
		})

		expect(trpc).not.toBeUndefined()
	})

	test('creating tRPC client (not be null)', () => {
		const trpc = createTRPCProxyClient<IdentifyTRPCRouter>({
			links: [
				httpBatchLink({
					url: 'http://127.0.0.1:3000'
				})
			]
		})

		expect(trpc).not.toBeNull()
	})

	test('check db connection', async () => {
		const client = new Client({
			user: 'postgres',
			password: 'root',
			database: 'bhotel',
			host: '127.0.0.1',
			port: 5432			
		})

		const login = 'login'

		client.connect()

		const response = await client.query(
			`select id_user from public.users where login = $1 or email = $1`,
			[login]
		)

		client.end()

		expect(response.rows).toBeDefined()
	})

	test('find not exists record', async () => {
		const trpc = createTRPCProxyClient<IdentifyTRPCRouter>({
			links: [
				httpBatchLink({
					url: 'http://127.0.0.1:3000'
				})
			]
		})

		const request = await trpc.findUser.query({
			login: 'login',
			connectionString: 'postgres://postgres:root@127.0.0.1/bhotel'
		})

		expect(request).not.toBeUndefined()
	}, 10000)
})
