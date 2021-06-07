const puppeteer = require("puppeteer");
const id = "prakharagarwal70@gmail.com";
const pw = "prakhar2121";
let tab
async function login() {
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
      
        
    })
    let pages = await browser.pages();
    tab = pages[0];
    await tab.goto("https://www.facebook.com/");
    await tab.type(`input[type="text"]`, id);
    await tab.type("#pass", pw);
    await tab.click("._42ft._4jy0._6lth._4jy6._4jy1.selected._51sy");//login button
    await tab.waitForTimeout(10000);

    await tab.click(".m9osqain.a5q79mjw.gy2v8mqq");//whats on your mind//dummyclick
    await tab.waitForTimeout(5000);
    await tab.click(".m9osqain.a5q79mjw.gy2v8mqq");//mainclick

    await tab.waitForSelector(`._1p1t._1p1u`, { visible: true });//typing krne k liye
    await tab.type(`._1p1t._1p1u`, "prakhar");



    //########################################################################################

    //file uploading code
    //credits:https://www.youtube.com/watch?v=qNRCuLrf930

    const [fileChooser] = await Promise.all([
        tab.waitForFileChooser(),
        tab.click('div[aria-label="Photo/Video"]')//selector for upload image icon
    ])
    await fileChooser.accept(['photo.png']);

    //############################################################################################
    await tab.waitForTimeout(3000);
    await tab.click(".k4urcfbm.dati1w0a.hv4rvrfc.i1fnvgqd.j83agx80.rq0escxv.bp9cbjyn.discj3wi");//post
    await tab.waitForTimeout(10000);
    await browser.close();

}
    
login();