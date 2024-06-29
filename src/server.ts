import app from './app';
import sequelize from './config/database';

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server in ascolto sulla porta ${PORT}`);
  });
}).catch((error) => {
  console.error('Errore di connessione al database:', error);
});
