import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Event extends Model {
  public id!: number;
  public titolo!: string;
  public descrizione!: string;
  public data!: Date;
  public luogo!: string;
  public posti_disponibili!: number;
}

Event.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  titolo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descrizione: {
    type: DataTypes.TEXT,
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  luogo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  posti_disponibili: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Event',
  tableName: 'eventi',
});

export default Event;
