import { Model } from "sequelize";
import db from ".";
import sequelize from "sequelize";

class Product extends Model {
  declare id: number;
  declare name: string;
  declare description: string;
  declare value: number;
  declare stock: number;
}

Product.init(
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: sequelize.STRING,
      allowNull: true,
    },
    value: {
      type: sequelize.FLOAT,
      allowNull: false,
    },
    stock: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "products",
    timestamps: false,
  }
);

export default Product;
