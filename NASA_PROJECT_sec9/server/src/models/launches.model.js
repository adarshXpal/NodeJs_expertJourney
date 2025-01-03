const launches = new Map();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let latestFlightNumber = getRandomInt(1,100);
const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer ISI',
  launchDate: new Date('December 27,2024'),
  target: 'Kepler-62 f',
  customer: ['ZTM','NASA'],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber,launch);

function getAllLaunches(){
  return Array.from(launches.values());
}
function addNewLaunch(launch){
  latestFlightNumber++;
  launches.set(latestFlightNumber,Object.assign(launch,{
    flightNumber: latestFlightNumber,
    customer: ['Badiya Bhai','NASA'],
    upcoming: true,
    success: true,
  })); 
}
function existsLaunchById(launchId){
  return launches.has(launchId);
}
function abortLaunchById(launchId){
  const aborted = launches.get(launchId);
  aborted.upcoming = false;
  aborted.success = false;
  latestFlightNumber--;
  return aborted;
}
module.exports = {
  getAllLaunches,
  addNewLaunch,
  existsLaunchById,
  abortLaunchById,
};
