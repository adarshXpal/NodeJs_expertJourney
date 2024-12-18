const axios = require('axios');
axios.get('https://www.google.com')
  .then((data)=>{
    console.log(data);
  })
  .catch((error)=>{
    console.log(error);
  })
  .then(()=>{
    console.log('All Done Badka!!');
  });

console.log(axios.isCancel('something'));

