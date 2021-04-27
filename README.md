# yt-title-parser

This is a file, that uses Puppeteer to control a headless browser and scrape the title of a video and the uploader into two seperate files called `title.txt` and `channelName.txt`. 

# How to run 
1) Clone repo
2) `yarn/npm install`
3) Open the `youTubeScraper.js` file from the `src` folder
4) Put your youtube link inside `await page.goto('')` 
5) Specify where you want the files saved on line 28 and 29. For example 
`fs.writeFileSync('C:/Users/user/Desktop/WebParser/example.txt', videoTitle)` where `user` is the username that you use on that pc
6) Run the following command in your terminal `node .\youTubeScraper.js` and after 2-3 seconds you should have two files with the specified name from step 5.


# Why?
This was created for fun. I wanted to see if I can scrape youtube titles and channel names using Puppteer and JS in order to use within Streamlabs OBS. 
This project is running as of 27.04.21 and it successfully bypasses the cookie/tracking Agreement that pops up on first visit.
