import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config';

interface RatingAttributes {
  id: number;
  rate: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export type RatingInput = Optional<RatingAttributes, 'id'>;

export type RatingOutput = Required<RatingAttributes>;

class Rating
  extends Model<RatingAttributes, RatingInput>
  implements RatingAttributes
{
  declare id: number;
  declare rate: number;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;
}

Rating.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rate: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {
    tableName: 'ratings',
    sequelize,
  },
);

export default Rating;
