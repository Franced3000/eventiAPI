##STRUTTURA DEL PROGETTO


eventiAPI/
│
├── src/
│   ├── config/
│   │   └── database.ts             *Database configuration using Sequelize*
│   │
│   ├── controllers/
│   │   ├── eventController.ts      *CRUD operations for events*
│   │   ├── registrationController.ts   *CRUD operations for registrations*
│   │   └── userController.ts       *CRUD operations for users*
│   │
│   ├── models/
│   │   ├── Event.ts                *Event model*
│   │   ├── Registration.ts         *Registration model*
│   │   └── User.ts                 *User model*
│   │
│   ├── routes/
│   │   ├── eventRoutes.ts          *Event routes*
│   │   ├── registrationRoutes.ts   *Registration routes*
│   │   └── userRoutes.ts           *User routes*
│   │
│   ├── services/
│   │   ├── eventService.ts         *Business logic for events*
│   │   ├── registrationService.ts  *Business logic for registrations*
│   │   └── userService.ts          *Business logic for users*
│   │
│   ├── utils/
│   │   ├── validators.ts           *Input validation utilities*
│   │   └── hash.ts                 *Password hashing functions*
│   │
│   ├── middlewares/
│   │   ├── authMiddleware.ts       *Authentication middleware*
│   │   └── errorMiddleware.ts      *Error handling middleware*
│   │
│   ├── algorithms/
│   │   ├── seatAvailability.ts     *Seat availability algorithm*
│   │   └── statistics.ts           *Participation statistics calculation*
│   │
│   ├── app.ts                      *Express application setup*
│   └── server.ts                   *Server startup script*
│
├── .env                            *Environment variables*
├── .eslintrc.js                    *ESLint configuration*
├── .gitignore                      *Git ignore file*
├── package.json                    *NPM package configuration*
├── tsconfig.json                   *TypeScript configuration*
└── README.md                       *Project documentation*
