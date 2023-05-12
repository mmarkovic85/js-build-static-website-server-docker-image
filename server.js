const path = require('path');
const express = require('express');

const app = express();

// config
const port = process.env.PORT || 3000;

// serve static files
app.use(express.static(path.resolve('public')));

// start server
app.listen(port, () => {
  console.log(`Server is live on port ${port}`);
});
