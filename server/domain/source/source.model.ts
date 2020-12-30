import { Model, Optional, DataTypes } from 'sequelize';

import { sequelize } from '../../db/connection';

import { ISource } from './source.entity';

export class Source extends Model<ISource, Optional<ISource, 'id'>> implements ISource {
  id!: number;
  type!: 'rss';
  url!: string;
  name!: string;
  logo!: string;
}

Source.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.ENUM('rss'),
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    logo: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
  },
  {
    tableName: "source",
    sequelize,
  }
)

