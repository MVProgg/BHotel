import { z } from 'zod'
import { router, procedure } from './trpc'
import { Client } from 'pg'

export const mainRouter = router({
	findUser: procedure
		.input(z.object({ login: z.string(), connectionString: z.string() }))
		.query(async (data) => {
			const { login, connectionString } = data.input

			const client = new Client({ connectionString: connectionString })

			client.connect()

			const response = await client.query(
				`select id_user from public.users where login = $1 or email = $1`,
				[login]
			)

			client.end()

			return response.rowCount === 0 ? undefined : response.rows[0]
		})
})

export type IdentifyTRPCRouter = typeof mainRouter
