import Registration from '../models/Registration';

export const calculateParticipationStats = async () => {
  const stats = await Registration.findAll({
    attributes: [
      'evento_id',
      [sequelize.fn('COUNT', sequelize.col('utente_id')), 'numero_partecipanti'],
    ],
    group: ['evento_id'],
  });

  return stats;
};
