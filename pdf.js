var conversion = require("phantom-html-to-pdf")();
var fs = require("fs");

conversion({ html: "<h1>Hello World11</h1>" }, function(err, pdf) {
    console.log(pdf.logs);
    console.log(pdf.numberOfPages);
    var writerStream = fs.createWriteStream('output.pdf');
    pdf.stream.pipe(writerStream);
    conversion.kill();
});