const { Sequelize } = require('sequelize');
const fs = require('fs');

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

const toBool = (x) => x == 'true'
global.apikey = {'https://api.adithyan.ml': 'free'}
global.apiUrl = 'https://api.adithyan.ml/'

const DATABASE_URL = process.env.DATABASE_URL === undefined ? './database.db' : process.env.DATABASE_URL
process.env.NODE_OPTIONS = '--max_old_space_size=2560'
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG)
module.exports = {
	VERSION: 'v4.3.2', 
    SESSION_ID: process.env.SESSION_ID || '01_15_H_E_R_M_I_T_M7_9OMH',
    KOYEB_API_KEY: process.env.KOYEB_API_KEY || '',
    KOYEB_APP_NAME: process.env.KOYEB_APP_NAME || '',  
    MODE: process.env.MODE || 'private',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME
       },
       DATABASE_URL: DATABASE_URL,
       DATABASE:
       DATABASE_URL === './database.db' ? new Sequelize({dialect: 'sqlite', storage: DATABASE_URL, logging: false,}) : new Sequelize(DATABASE_URL, {dialect: 'postgres', ssl: true, protocol: 'postgres', dialectOptions: {native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false,}),
       BRAIN_ID: process.env.BRAIN_ID || 'bid=168613&key=EfbnX54Iy9PFIFp3',
       SUDO: process.env.SUDO || '94784749430,0',
       DEBUG: DEBUG
};
