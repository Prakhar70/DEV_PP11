const id = "gedoso7088@rphinfo.com"
const pw = "1234567"
let tab;

const puppeteer = require("puppeteer");
let browserOpenPromise = puppeteer.launch({
  headless: false,
  defaultViewport: null,
  args: ["--start-maximized"]
}
);
//console.log(browserOpenPromise);
browserOpenPromise.then(function (browser) {
  console.log("browser is opened");
  return browser.pages();
})
  .then(function (pages) {
    tab = pages[0];
    return tab.goto("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");
  })
  .then(function () {
    return tab.type("#input-1", id);
  })
  .then(function () {
    return tab.type("#input-2", pw);
  })
  .then(function(){
    return tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
  })
  .then(function(){
    console.log("clicked");
  })