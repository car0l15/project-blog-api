import { Model, DataTypes } from "sequelize";
import db from '.';

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

export default Category;