import { Model, DataTypes } from "sequelize";
import db from '.';
import PostCategory from "./postcategory";

class Category extends Model
{
  public id!:number;
  public name!:string;
}

Category.init({
  
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },

}, {
  tableName: 'Category',
  sequelize: db,
  timestamps: false
});

Category.hasMany(PostCategory, {
  foreignKey: 'category_id',
  as: 'PostCategory'
})

export default Category;