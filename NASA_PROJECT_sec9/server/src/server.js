const PORT = process.env.PORT || 8000;
const http = require('http');
const app = require('./app');
const server = http.createServer(app);
const {loadPlanetsData} = require('./models/planets.model');
async function startServer(){
  await loadPlanetsData();
  server.listen(PORT,()=>{
    console.log(`Listening on PORT: ${PORT}`);
  });
}

startServer();

