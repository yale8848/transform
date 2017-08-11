 var phantomjs = require('phantomjs-prebuilt')



 var pageUrl = 'http://lftbjb.52fdw.com:9058/LFT-EditingSystem/page/knowdic/knowdic-view.html?uid=1:101:701:[699]';
 //pageUrl = 'https://juejin.im/entry/597a86c9f265da3e2c70cb18';
 var output = 'test1.pdf'

 var program = phantomjs.exec('phantomjs-script.js', pageUrl, output)
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
          pageUrl,
          output
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