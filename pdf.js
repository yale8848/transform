var conversion = require("phantom-html-to-pdf")({
    phantomPath: require("phantomjs-prebuilt").path
});
var fs = require("fs");

conversion({ html: "<h1>Hello World11</h1>" }, function(err, pdf) {
    console.log(pdf.logs);
    console.log(pdf.numberOfPages);
    var writerStream = fs.createWriteStream('output.pdf');
    pdf.stream.pipe(writerStream);
    conversion.kill();
});