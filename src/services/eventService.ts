import Event from '../models/Event';

class EventService {
  static async createEvent(data: any) {
    return await Event.create(data);
  }

  static async getAllEvents() {
    return await Event.findAll();
  }

  static async getEventById(id: number) {
    return await Event.findByPk(id);
  }

  static async updateEvent(id: number, data: any) {
    const event = await Event.findByPk(id);
    if (event) {
      return await event.update(data);
    }
  }

  static async deleteEvent(id: number) {
    const event = await Event.findByPk(id);
    if (event) {
      return await event.destroy();
    }
  }
}

export default EventService;
