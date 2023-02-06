import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: 'estudos_api',
  host: process.env.MYSQL_HOSTNAME || 'localhost',
  port: Number(process.env.MYSQL_PORT) || 3307,
  dialect: 'mysql',
} 

export = config;