const http = require('http');
const PORT = 3000;
const server = http.createServer();
const friends = [
  {
    id: 0,
    name:'Talish',
  },
  {
    id:1,
    name:'Ada',
  },
  {
    id:2,
    name: 'Harsh',
  },
  {
    id:3,
    name:'Banu',
  }
];

server.on('request',(req,res)=>{
  const items=req.url.split('/');
  //" ","friends","id",
  if(items[1]==='friends'){
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    if(items.length ===3){
      const index = Number(items[2]);
      if(index>friends.length){
        res.statusCode = 404;
        res.end();
      }
      res.end(JSON.stringify(friends[index]));
    }
    else{
      res.end(JSON.stringify(friends));
    }
  }
  else{
    res.statusCode = 404;
    res.end();
  }
});
  server.listen(PORT,()=>{
    console.log(`Listning on PORT: ${PORT}`);
  });

