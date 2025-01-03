import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config';

interface ProductAttributes {
  id: number;
  name: string;
  price: number;
  rating: number;
  img?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type ProductInput = Optional<ProductAttributes, 'id' | 'img'>;

export type ProductOutput = Required<ProductAttributes>;

class Product
  extends Model<ProductAttributes, ProductInput>
  implements ProductAttributes
{
  declare id: number;
  declare name: string;
  declare price: number;
  declare rating: number;
  declare img: string;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    img: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'products',
    sequelize,
  },
);

export default Product;
