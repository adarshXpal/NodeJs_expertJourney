const launchesModel=require('../../models/launches.model');
function httpGetAllLaunches(req,res){
  res.status(200).json(launchesModel.getAllLaunches());
}

module.exports = {
  httpGetAllLaunches,
};
