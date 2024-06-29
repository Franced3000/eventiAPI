##STRUTTURA DEL PROGETTO


eventiAPI/
# Sistema di Gestione degli Eventi

Un'applicazione per gestire eventi, utenti e iscrizioni.

## Funzionalità

- **Eventi**: CRUD (creazione, lettura, aggiornamento, cancellazione)
- **Iscrizioni**: CRUD per gestire iscrizioni a eventi
- **Utenti**: CRUD per gestire gli utenti

## Configurazione

1. Crea un file `.env` con le seguenti variabili:
DB_NAME=nome_del_database
DB_USER=utente_del_database
DB_PASSWORD=password_del_database
DB_HOST=localhost
PORT=3000

2. Installa le dipendenze:

3. Avvia il server in modalità sviluppo:
npm run dev


## Struttura del Progetto

- `src/config`: Configurazione del database
- `src/controllers`: Logica dei controller per ogni risorsa
- `src/models`: Modelli Sequelize
- `src/routes`: Definizione delle rotte
- `src/services`: Logica di business
- `src/utils`: Funzioni di utilità
- `src/middlewares`: Middleware per autenticazione e gestione degli errori
- `src/algorithms`: Algoritmi per disponibilità posti e statistiche

## Licenza

MIT

