const alarmClock = (args) => {

  for (let arg of args) {
    if (!isNaN(arg) && arg >= 0) {
      let convertedArg = arg * 1000;
      setTimeout(() => process.stdout.write('\x07'), convertedArg);
    }
  }

};

alarmClock(process.argv.slice(2));