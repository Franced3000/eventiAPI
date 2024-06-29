import Event from '../models/Event';

class EventService {
  static async createEvent(data: any) {
    return await Event.create(data);
  }

  // Altri metodi CRUD...
}

export default EventService;
