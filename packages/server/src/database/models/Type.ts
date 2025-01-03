import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config';

interface TypeAttributes {
  id: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type TypeInput = Optional<TypeAttributes, 'id'>;

export type TypeOutput = Required<TypeAttributes>;

class Type extends Model<TypeAttributes, TypeInput> implements TypeAttributes {
  declare id: number;
  declare name: string;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;
}

Type.init(
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
  },
  {
    tableName: 'types',
    sequelize,
  },
);

export default Type;
