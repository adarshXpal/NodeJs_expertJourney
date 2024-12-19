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
  if(items[1]==='friends' && req.method === 'POST'){
    req.on('data',(data)=>{
      const friend = data.toString();
      console.log('Request: ',friend);
      friends.push(JSON.parse(friend));
    });
  }
  else{
    res.statusCode = 404;
    res.end();
  }
});
  server.listen(PORT,()=>{
    console.log(`Listning on PORT: ${PORT}`);
  });

