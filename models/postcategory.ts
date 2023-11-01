import { Model, DataTypes } from "sequelize";
const config = require(__dirname + '/../config/config.js');
import db from '.';
import Category from "./category";
import BlogPost from "./blogpost";

class PostCategory extends Model 
{

  public id!: number;
  public post_id!: number;
  public category_id!: number;

}

PostCategory.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false  
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'PostCategory',
  sequelize: db,
  timestamps: false
})

PostCategory.belongsTo(Category, {
  foreignKey: 'category_id',
  as: 'category'
})

PostCategory.belongsTo(BlogPost, {
  foreignKey: 'post_id',
  as: 'BlogPost'
})

export default PostCategory;