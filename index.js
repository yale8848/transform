var mjpage = require('mathjax-node-page').mjpage;

const fs = require('fs');
const input = fs.readFileSync('./test/test.html');

mjpage(input, {
    format: ["TeX"],
    singleDollars: true,
    fontURL: 'http://lftresource.oss-cn-qingdao.aliyuncs.com/cdn/lib/MathJax-2.7.0/fonts/HTML-CSS'
}, { html: true, css: true }, function(output) {
    fs.writeFile('./test/output/test.html', output, function(erre) {
        if (erre)
            console.log(erre);

    });
});