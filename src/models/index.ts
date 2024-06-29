import User from './User';
import Event from './Event';
import Registration from './Registration';

User.hasMany(Registration, { foreignKey: 'utente_id' });
Event.hasMany(Registration, { foreignKey: 'evento_id' });

Registration.belongsTo(User, { foreignKey: 'utente_id' });
Registration.belongsTo(Event, { foreignKey: 'evento_id' });

export { User, Event, Registration };
