const express = require('express');
const friendsRouter = express.Router();
const friendController = require('../controllers/friends.controller');
friendsRouter.use((req,res,next)=>{
  console.log('User IP: ',req.ip);
  next();
});
friendsRouter.post('/',friendController.postFriends);
friendsRouter.get('/',friendController.getFriends);
friendsRouter.get('/:friendId',friendController.individualFriend);

module.exports= friendsRouter;
