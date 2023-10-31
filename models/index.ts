import { Sequelize } from "sequelize";
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];


export default new Sequelize(config);