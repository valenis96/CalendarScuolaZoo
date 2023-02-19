const jsonServer = require('json-server');
const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const eventsData = require('../server/data/events');

server.get('/api/events', (req, res, next) => {
  res.status(200).send(eventsData.getEvents);
})

server.listen(3000, () => {
  console.log('JSON server listening on port 3000');
});