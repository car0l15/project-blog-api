import { Model, DataTypes } from 'sequelize';
const config = require(__dirname + '/../config/config.js');
import db from '.';
import users from './users';

class BlogPost extends Model 
{
    public id!: number;
    public title!: string;
    public userId!: number;
    public published!: Date;
    public updated!: Date;

}

BlogPost.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    title: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
    userId: {
        type: new DataTypes.INTEGER,
        allowNull: false,
      },
    published: {
        type: new DataTypes.DATE,
        allowNull: false,
      },
    updated: {
        type: new DataTypes.DATE,
        allowNull: false,
      },
}, {
    tableName: 'BlogPost',
    sequelize: db, 
    timestamps: false
  })

 BlogPost.belongsTo(users, {
    foreignKey: 'userId',
    as: 'users'
 })

 export default BlogPost;
