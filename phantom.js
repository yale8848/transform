 var phantomjs = require('phantomjs-prebuilt')
 var program = phantomjs.exec('phantomjs-script.js', 'arg1', 'arg2')
 program.stdout.pipe(process.stdout)
 program.stderr.pipe(process.stderr)
 program.on('exit', code => {

 })

 /*
  var path = require('path')
  var childProcess = require('child_process')
  var phantomjs = require('phantomjs-prebuilt')
  var binPath = phantomjs.path

  var childArgs = [
          path.join(__dirname, './phantomjs-script.js'),
          ''
      ]
      // console.log(binPath);
  childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
      if (err) {
          console.log(err);
      } else {
          if (stderr) {
              console.log(stderr);
          }
          console.log(stdout);
      }
      // handle results 
  })*/