import Event from '../models/Event';

export const checkSeatAvailability = async (eventId: number) => {
  const event = await Event.findByPk(eventId);
  if (event) {
    return event.posti_disponibili > 0;
  }
  throw new Error('Evento non trovato');
};
