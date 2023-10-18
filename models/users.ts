import { Model, DataTypes, Sequelize } from 'sequelize'
const config = require(__dirname + '/../config/config.js');
import db from '.';



class users extends Model 
{
    public id!:number;
    public displayName!: string;
    public email!: string;
    public password!: string;
    public image!: string;
}

users.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    displayName: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    password: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    image: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
  }, {
    tableName: 'users',
    sequelize: db, 
    timestamps: false
  });

export default users;