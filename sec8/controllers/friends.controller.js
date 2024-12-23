const model = require('../models/friends.model');;
function postFriends(req,res) {
  if(!req.body.name){
    return res.status(400).json({error: 'MISSING FRIENDS NAME NIGGA!!'});
  }
  const newfriend = {
    name: req.body.name,
    id: model.length
  };
  model.push(newfriend);
  res.json(newfriend);
};

function getFriends(req,res){
  res.status(200).send(model);
};
function individualFriend(req,res){
  const friendId = Number(req.params.friendId);  
  const friend = model[friendId];
  if(friend){
    res.status(200).json(friend);
  }
  else{
    res.status(404).json({
      error: 'Friends ki maa ka bhosda',
    });
  }
};

module.exports = {
  postFriends,
  getFriends,
  individualFriend,
};

