import { mainRouter } from '@bhotel/identify'
import { createHTTPServer } from '@trpc/server/adapters/standalone'
import { $log } from '@tsed/logger'
import dotenv from 'dotenv'
import path from 'path'

$log.level = 'DEBUG'
$log.name = 'IDENTIFY'

const envPath = path.join(path.resolve(), `.env`)

const prepareServer = () => {
	$log.info('tRPC server preparing...')

	return createHTTPServer({
		router: mainRouter
	})
}

const configureEnv = () => {
	$log.debug(`reading ${envPath} configuration`)
	const error = dotenv.config({ path: envPath }).error

	if (error) throw new Error(`cannot configure dotenv: ${error}`)

	$log.info('env configured')
}

configureEnv()

const main = async () => {
	$log.info('server starting...')
	$log.info(`running configuration: ${process.env.NODE_ENV}`)

	const port = process.env.LISTEN_PORT
	const host = process.env.LISTEN_HOST

	if (Number.isNaN(port) || port === undefined)
		throw new Error(`env variable \'LISTEN_PORT\' is 0 or not defined`)

	if (host === '' || host === undefined || host === ' ')
		throw new Error("env variable 'LISTEN_HOST' is empty or not defined")

	const server = prepareServer()

	$log.info('tRPC server prepared!')

	server.server.addListener('listening', () => $log.info(`start listen server on: ${host}:${port}`))
	server.server.addListener('request', (req, res) => $log.info(`new request`))

	server.listen(port, host)
}

main().catch((error: Error) => $log.error(error.message))
