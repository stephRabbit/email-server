const express = require('express');
require('./services/passort');

const app = express();

require('./routes/authRoutes')(app);

// Dev/Prod ports
const PORT = process.env.PORT || 5000;
app.listen(PORT);