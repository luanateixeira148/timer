let secs = process.argv.slice(2);

for (let sec of secs) {
  if (sec <= 0 || isNaN(sec)) {
    //do nothing
  } else {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, sec * 1000)
  }
};