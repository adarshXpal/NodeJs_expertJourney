const path =require('path');

function getMessages(req,res){
  // res.send('<ul><li>HELLO ADARSH !!</li></ul>');
  res.sendFile(path.join(__dirname,'..','public','images','adarsh_photo.png'));
};
function postMessages(req,res){
  console.log(`Updating Messages !!`);
  res.end();
  
};

module.exports = {
  getMessages,
  postMessages,
};
