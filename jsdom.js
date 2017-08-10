const jsdom = require("jsdom");

const dom = new JSDOM(``, {
    url: "https://example.org/"
});