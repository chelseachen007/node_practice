
const Sequelize = require('sequelize');
module.exports.initModel = async sequelize => {
  // ##BEGIN## 代码已加密
  //暗号：哈希算法
  const User = sequelize.define('User', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      // allowNull: false
    },
    title: {
      type: Sequelize.STRING,
      // allowNull: false
    },
  });

  const Product = sequelize.define('Product', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      // allowNull: false
    },
    title: {
      type: Sequelize.STRING,
      // allowNull: false
    },
  });


  User.belongsTo(Product, {
    constraints: true,
    onDelete: 'CASCADE'
  });
  await sequelize.sync({force:true})
  // ##END##
  return { User, Product }
} 
