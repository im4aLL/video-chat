const fs = require('fs-extra');
const dir = __dirname + '/dist';

fs.remove(dir, err => {
  if (err) {
    return console.error(err);
  } {
    console.log('Clean up complete!');
  }
});
