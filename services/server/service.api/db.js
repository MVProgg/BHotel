import pg from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();
/**
 * @todo move to .env file
*/
const USERNAME = 'postgres';
const PASSWORD = 'postgres';
const HOST = 'localhost';
const DATABASE = 'Booking';

/**
 * @todo rename this variable
*/
const conStringPri = `postgres://${USERNAME}:${PASSWORD}@${HOST}/${DATABASE}`;
const Client = pg.Client;
const client = new Client({ connectionString: conStringPri });
client.connect();

export default client;