Expected code base structure

```
my-mern-app/
├── client/          <-- React Frontend Code
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/  (API calls to backend)
│   │   └── App.js
│   └── package.json
|
├── server/          <-- Express/Node.js Backend Code
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   ├── server.js    (or app.js - entry point)
│   └── package.json
|
├── .env             <-- Environment variables (sensitive data)
└── package.json     <-- Root package.json (for dev scripts, etc.)
```