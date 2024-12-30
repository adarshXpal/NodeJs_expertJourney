const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer ISI',
  launchDate: new Date('December 27,2024'),
  destination: 'Kepler-62 f',
  customer: ['ZTM','NASA'],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber,launch);

function getAllLaunches(){
  return Array.from(launches.values());
}
module.exports = {
  getAllLaunches,
};
