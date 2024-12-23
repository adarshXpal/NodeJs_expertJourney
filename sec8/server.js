const express = require('express');
const app = express();
const PORT = 3001;
const friendsRouter = require('./Routers/friends.router');
const messagesRouter = require('./Routers/messages.router');


app.use((req,res,next)=>{
  const start = Date.now();
  next();
  const delta = Date.now()-start;
  console.log(`${req.method}${req.baseUrl}\n ${req.url} ${delta} milliseconds`);
});
app.use(express.json());
app.use('/friends',friendsRouter);
app.use('/messages',messagesRouter);
app.listen(PORT,()=>{
  console.log(`Listning at PORT: ${PORT}`);
});
