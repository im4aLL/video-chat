const fs = require('fs-extra');
const publicDir = __dirname + '/dist/public';

fs.ensureDir(publicDir)
  .then(() => {
    fs.copy(__dirname + '/public', publicDir)
      .then(() => console.log('Package generated!'))
      .catch(err => console.error(err));
  })
  .catch(err => {
    console.error(err)
  });
