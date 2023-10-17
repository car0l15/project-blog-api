import { Model, DataTypes, Sequelize } from 'sequelize'
const sequelize = new Sequelize('sqlite::memory:');

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
    sequelize, 
  });
  