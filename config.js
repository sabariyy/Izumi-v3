const { Sequelize } = require("sequelize");
const fs = require("fs");
require('dotenv').config();

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env', override: true });

// Function to convert text to boolean
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// Function to convert string to boolean
const toBool = (x) => (x && x.toLowerCase() === 'true') || false;
global.apiUrl = 'https://api.maskser.me/'
global.eypzApi = 'https://combative-sarine-eypz-god-d4cce0fc.koyeb.app/'

// Define the Sequelize instance based on DATABASE_URL
const DATABASE_URL = process.env.DATABASE_URL === undefined ? './database.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);
// Export configuration variables
module.exports = {
  HANDLERS: (process.env.PREFIX || '^[.,!]').trim(),
  BRANCH: "main",
  MODE: (process.env.MODE || 'public').toLowerCase(),
  ERROR_MSG: toBool(process.env.ERROR_MSG) || true,
  LOG_MSG: toBool(process.env.LOG_MSG) || true,
  READ_CMD: toBool(process.env.READ_CMD),
  SESSION_ID: process.env.SESSION_ID || "izumi~r6Kbrixi",
  MENU_URL: process.env.MENU_URL || "https://i.ibb.co/fd7LzYd/file-14.jpg",
  CAPTION: process.env.CAPTION || "⺀𝛿𝛼𝜷𝜶𝜈𝜄 ᝃ𑁍",
  READ_MSG: toBool(process.env.READ_MSG),
  OWNER_NAME: process.env.OWNER_NAME || "⺀𝛿𝛼𝜷𝜶𝜈𝜄 ᝃ𑁍",
  BOT_NAME: process.env.BOT_NAME || "𝚰𝚭𝐔𝚳𝚰-𝚅3",
  SUDO: process.env.SUDO || null,
  LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
  STICKER_PACKNAME: process.env.STICKER_PACKNAME || "⺀𝛿𝛼𝜷𝜶𝜈𝜄 ᝃ𑁍",
  AUDIO_DATA: process.env.AUDIO_DATA || "⺀𝛿𝛼𝜷𝜶𝜈𝜄 ᝃ𑁍;𝐓𝐡𝐞 𝐌𝐨𝐨𝐧 𝐈𝐬 𝐁𝐞𝐮𝐭𝐢𝐟𝐮𝐥 𝐈𝐬𝐧'𝐭 𝐈𝐭 ?;https://i.ibb.co/fd7LzYd/file-14.jpg",
  PROCESSNAME: process.env.PROCESSNAME || "Izumi-v3",
  AUTHOR: process.env.AUTHOR || "⺀𝛿𝛼𝜷𝜶𝜈𝜄 ᝃ𑁍",
  DELETED_LOG_CHAT: process.env.DELETED_LOG_CHAT || false,
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  KOYEB_API_KEY: process.env.KOYEB_API_KEY || "your_koyeb_api_key",
  KOYEB_APP_NAME: process.env.KOYEB_APP_NAME || '',
  KOYEB: toBool(process.env.KOYEB) || false,
  HEROKU: toBool(process.env.HEROKU) || false,
  TERMUX: toBool(process.env.TERMUX) || false,
  DATABASE_URL: DATABASE_URL,
  DATABASE:
       DATABASE_URL === './database.db' ? new Sequelize({dialect: 'sqlite', storage: DATABASE_URL, logging: false,}) : new Sequelize(DATABASE_URL, {dialect: 'postgres', ssl: true, protocol: 'postgres', dialectOptions: {native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false,}),
  DEBUG: DEBUG
};
