var page = require('webpage').create();
page.paperSize = {
    format: 'A4',
    orientation: 'portrait',
    margin: '1.2cm',
    footer: {
        height: "1cm",
        contents: phantom.callback(function(pageNum, numPages) {
            return "<div style='text-align:center'>" + pageNum + " / " + numPages + "</div>";
        })
    }
};
//age.zoomFactor = 1;
page.settings.loadImages = true;
page.settings.javascriptEnabled = true;
page.settings.localToRemoteUrlAccessEnabled = true;
page.settings.resourceTimeout = 5000;
var ids = [];
page.onResourceRequested = function(requestData, networkRequest) {

    ids[requestData.id] = false;
    // console.log('requestData (#' + requestData.id);
};
page.onResourceReceived = function(response) {

    if (response.stage == "end") {
        ids[response.id] = true;

        // console.log('Response (#' + response.id);
    }
};

page.onResourceTimeout = function(request) {
    ids[request.id] = true;
    //console.log('Response (#' + request.id + '): ' + JSON.stringify(request));
};
page.onResourceError = function(resourceError) {
    ids[resourceError.id] = true;
    // console.log('Unable to load resource (#' + resourceError.id + 'URL:' + resourceError.url + ')');
    // console.log('Error code: ' + resourceError.errorCode + '. Description: ' + resourceError.errorString);
};
page.onLoadFinished = function(status) {
    //console.log('Status: ' + status);
    // Do other things here...
};
/*page.open('http://lftbjb.52fdw.com:9058/LFT-EditingSystem/page/knowdic/knowdic-view.html?uid=1:101:701:[699]', function(status) {
    if (status !== 'success') {
        console.log('Unable to load the address!');
    } else {

    }
});*/



var capture = function(page, pageUrl, callback) {
    page.open(pageUrl, function(status) {
        var interval, allDone;

        if (status !== 'success') {
            callback(new Error('Error rendering page'));
            return;
        }

        allDone = page.evaluate(function() {
            if (window.MathJax) {
                MathJax.Hub.Register.StartupHook('End', function() {
                    window.allDone = 1;
                });
                return false;
            } else {
                return true;
            }
        });
        if (allDone) {
            console.log("+++222");
        } else {
            console.log("+++111");
        }
        interval = setInterval(function() {
            if (!allDone) {
                var allDone1 = page.evaluate(function() {
                    return window.allDone;
                });
                if (allDone1) {
                    console.log("+++444");
                } else {
                    console.log("+++666");
                }
                allDone = allDone1;
            }

            var finish = true;
            for (var i = 0; i < ids.length; i++) {
                if (ids[i] == undefined) {
                    continue;
                }
                if (!ids[i]) {
                    finish = false;
                }
            }

            if (allDone && finish) {
                clearInterval(interval);
                callback();
            }
        }, 1500);
    });
};

//var page = webpage.create();



var pageUrl = 'http://lftbjb.52fdw.com:9058/LFT-EditingSystem/page/knowdic/knowdic-view.html?uid=1:101:701:[699]';
//var pageUrl = 'https://www.baidu.com/';
capture(page, pageUrl, function(err) {

    if (err) {
        console.log(err);
    } else {

        //console.log(page.content);
        page.render('test7.pdf', { format: 'pdf' });
        phantom.exit();


        //
    }

});