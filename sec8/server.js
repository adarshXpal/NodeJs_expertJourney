const express = require('express');
const app = express();
const PORT = 3000;
const friends = [{id: 0,name: 'Adarsh Pal'},
  {id:1,name: 'adrij'},
  {id:2,name:'Alimash'}];
app.use(express.json());
app.post('/friends',(req,res)=>{
  if(!req.body.name){
    return res.status(400).json({error: 'MISSING FRIENDS NAME NIGGA!!'});
  }
  const newfriend = {
    name: req.body.name,
    id: friends.length
  };
  friends.push(newfriend);
  res.json(newfriend);
});
app.use((req,res,next)=>{
  const start = Date.now();
  next();
  const delta = Date.now()-start;
  console.log(`${req.method} ${req.url} ${delta} milliseconds`);
});
app.get('/friends',(req,res)=>{
  res.status(200).send(friends);
});
app.get('/friends/:friendId',(req,res)=>{
  const friendId = Number(req.params.friendId) ;  
  const friend = friends[friendId];
  if(friend){
    res.status(200).json(friend);
  }
  else{
    res.status(404).json({
      error: 'Friends ki maa ka bhosda'
    });
  }
});
app.listen(PORT,()=>{
  console.log(`Listning at PORT: ${PORT}`);
});
