const puppeteer = require('puppeteer');
const fs = require('fs');


(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
//set viewport for the headless browser
	await page.setViewport({width: 1920, height: 1080 })
//visit manually put Youtube url
    await page.goto('https://www.youtube.com/watch?v=UNFW0myNrR4', {
		waitUntil: 'networkidle0'
	});
//Find the 'I Agree' button for the cookies, before youtube loads the first time
    await page.evaluateHandle(() => document.querySelectorAll('[aria-label="Agree to the use of cookies and other data for the purposes described"]'));
	//screenshot debugging
	// await page.screenshot({path: 'before_click.png'})
	await page.click('[aria-label="Agree to the use of cookies and other data for the purposes described"]')
	// await page.screenshot({path: 'after_click.png'})
	//wait until pop up loads and leads to to the URL specified above
	await page.waitForNavigation({waitUntil: ['networkidle0']})
	// await page.screenshot({path: 'after_nav_click.png'})



const videoTitle = await page.evaluate(() => document.querySelector('h1').textContent.toString());
const channelName = await page.evaluate(() => document.querySelector('#text-container.ytd-channel-name').textContent.toString());
    fs.writeFileSync('C:/Users/user/Desktop/WebParser/title.txt', videoTitle);
    fs.writeFileSync('C:/Users/user/Desktop/WebParser/channelName.txt', channelName);
    console.log(videoTitle);
    console.log(channelName);
    await browser.close();
})();




