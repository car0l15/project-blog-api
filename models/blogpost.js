'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BlogPost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     BlogPost.belongsTo(models.users);
     models.users.hasMany(BlogPost);

    //  BlogPost.hasMany(models.postcategory);
    //  models.postcategory.belongsTo(BlogPost);
    }
  }
  BlogPost.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'BlogPost',
  });
  return BlogPost;
};