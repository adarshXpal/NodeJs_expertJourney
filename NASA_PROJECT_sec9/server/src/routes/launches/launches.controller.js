const launchesModel=require('../../models/launches.model');
function httpGetAllLaunches(req,res){
  res.status(200).json(launchesModel.getAllLaunches());
}
function httpAddNewLaunch(req,res){
  const launch = req.body;
  if(!launch.rocket || !launch.mission || !launch.launchDate || !launch.target){
    return res.status(400).json({
      error: 'Missing Required Launch Property !!',
    });
  }
  launch.launchDate = new Date(launch.launchDate);
  if(isNaN(launch.launchDate)){
    return res.status(400).json({
      error: 'Invalid Date MotherFuCCa !!',
    });
  }
  launchesModel.addNewLaunch(launch);
  res.status(201).json(launch);
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
};
