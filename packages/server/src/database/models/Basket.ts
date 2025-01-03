import {
  DataTypes,
  Model,
  Optional,
  ForeignKey,
  CreationOptional,
} from 'sequelize';
import sequelize from '../config';
import { User } from '.';

interface BasketAttributes {
  id: number;

  userId: ForeignKey<User['id']>;
  createdAt?: Date;
  updatedAt?: Date;
}

export type BasketInput = Optional<BasketAttributes, 'id'>;

export type BasketOutput = Required<BasketAttributes>;

class Basket
  extends Model<BasketAttributes, BasketInput>
  implements BasketAttributes
{
  declare id: CreationOptional<number>;

  declare userId: ForeignKey<User['id']>;

  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;
}

Basket.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
  },
  {
    tableName: 'baskets',
    sequelize,
  },
);

export default Basket;
