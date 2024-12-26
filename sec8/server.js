const express = require('express');
const app = express();
const PORT = 3001;
const friendsRouter = require('./Routers/friends.router');
const messagesRouter = require('./Routers/messages.router');
const path = require('path');

app.set('view engine','hbs');
app.set('views',path.join(__dirname,'view'));

app.use((req,res,next)=>{
  const start = Date.now();
  next();
  const delta = Date.now()-start;
  console.log(`${req.method}${req.baseUrl}\n ${req.url} ${delta} milliseconds`);
});
app.use('/site',express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use('/friends',friendsRouter);
app.use('/messages',messagesRouter);
app.get('/',(req,res)=>{
  res.render('index',{
    title: 'My Friends Are Very Clever !!',
    caption:'My name is Adarsh!!', });
});
app.listen(PORT,()=>{
  console.log(`Listning at PORT: ${PORT}`);
});
