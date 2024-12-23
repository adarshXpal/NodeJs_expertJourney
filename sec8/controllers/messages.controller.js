function getMessages(req,res){
  res.send('<ul><li>HELLO ADARSH !!</li></ul>');
};
function postMessages(req,res){
  console.log(`Updating Messages !!`);
  res.end();
  
};

module.exports = {
  getMessages,
  postMessages,
};
