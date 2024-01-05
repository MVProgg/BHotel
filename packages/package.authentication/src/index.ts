import { z } from 'zod'
import { router, procedure } from './trpc'
import { Client } from 'pg'
import { IJWTPair, IUserPayload } from '@bhotel/interfaces'

type TRouterData = {
	connectionString: string
}

export const mainRouter = (routerData: TRouterData) =>
	router({
		authenticate: procedure
			.input(z.object({ login: z.string(), password: z.string() }))
			.query(async (data) => {
				const { login, password } = data.input

				const client = new Client({
					connectionString: routerData.connectionString
				})

				client.connect()

				const response = await client.query(
					`select id_user, login, role, email from public.users where (login = $1 or email = $1) and password = $2`,
					[login, password]
				)

				const userData: IUserPayload = response.rows

				client.end()

				if (userData === null || userData === undefined) {
					return { message: 'user not found' }
				}

				const jwt: IJWTPair = {
					access: '',
					refresh: ''
				}

				/**
				 * @todo add redis-session support
				 */

				return jwt
			})
	})

export type AuthenticateTRPCRouter = typeof mainRouter
