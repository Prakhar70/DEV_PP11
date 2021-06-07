const puppeteer = require("puppeteer");
const fs = require("fs");
const cron = require("node-cron");


async function uploadpost(uid, pwd) {
  let tab;
  let rawdata = fs.readFileSync("./sample.json");

  let data = JSON.parse(rawdata);
 
  let browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  let pages = await browser.pages();
  tab = pages[0];
  await tab.goto("https://www.facebook.com/");

  await tab.type(`input[type="text"]`, uid);
  await tab.type("#pass", pwd);
  await tab.click("._42ft._4jy0._6lth._4jy6._4jy1.selected._51sy"); //login button
  await tab.waitForTimeout(10000);

  await tab.click(".m9osqain.a5q79mjw.gy2v8mqq"); //whats on your mind//dummyclick
  await tab.waitForTimeout(5000);

  await tab.click(".m9osqain.a5q79mjw.gy2v8mqq"); //mainclick

  await tab.waitForSelector(`._1p1t._1p1u`, { visible: true }); //typing krne k liye
  await tab.type(`._1p1t._1p1u`, data["POSTS"][0]["text"]);

  //########################################################################################

  //file uploading code
  //credits:https://www.youtube.com/watch?v=qNRCuLrf930

  const [fileChooser] = await Promise.all([
    tab.waitForFileChooser(),
    tab.click('div[aria-label="Photo/Video"]'), //selector for upload image icon
  ]);
  await fileChooser.accept([data["POSTS"][0]["img"]]);

  //############################################################################################
  await tab.waitForTimeout(3000);
  await tab.click(
    ".k4urcfbm.dati1w0a.hv4rvrfc.i1fnvgqd.j83agx80.rq0escxv.bp9cbjyn.discj3wi"
  ); //post

  await tab.waitForTimeout(10000);
  data["POSTS"].shift();
  console.log(data);
  fs.writeFileSync("./sample.json", JSON.stringify(data));

  await browser.close();
}

const id = "rajkamalzomato@gmail.com";
const pwd = "Prakhar420";
uploadpost(id,pwd);
