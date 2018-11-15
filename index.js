const hapi = require('hapi');
const mongoose = require('mongoose');
var dotenv = require('dotenv');

dotenv.config();

const server = hapi.server({
  port: 4000,
  host: 'localhost'
});

mongoose.connect(process.env.MONGOLAB_URI);

mongoose.connection.once('open', () => {
  console.log('connected to database');
});

const init = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();