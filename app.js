//
var chrome = document.querySelector('.chrome')
var firefox = document.querySelector('.firefox')
var safari = document.querySelector('.safari')
var explorer = document.querySelector('.explorer')
//
var chromeDiv = document.getElementById('chrome')
var firefoxDiv = document.getElementById('firefox')
var safariDiv = document.getElementById('safari')
var explorerDiv = document.getElementById('explorer')

var browserData = navigator.userAgent.split(' ')
console.log( browserData)



if(browserData){
    var data = browserData[browserData.length -1]
    var browserIndex = data.split('/')
    var browser = browserIndex[0].toLocaleLowerCase()
    //chrome
    if(browser === 'safari'){
        chrome.innerHTML =  '<img  src="Google Chrome.png" alt="">' 
        chromeDiv.style.padding = '0px'
        chromeTrue()
    }
    //firefox
    if(browser === 'firefox'){
        firefox.innerHTML = '<img src="Firefox.png" alt="">'  
        firefoxDiv.style.padding = '0px'
        firefoxTrue()
    }
    // microsoft edge
    if(browser === 'edg'){
        explorer.innerHTML = '<img src="Explorer.png" alt="">'  
        explorerDiv.style.padding = '0px'
        explorerTrue()
    }
    //safari

}

function chromeTrue() {
    function animate1() {
        chromeDiv.style.padding = '10px'
        chromeDiv.style.transition = 'all 0.4s ease-in-out'
    }
    function animate2() {
        chromeDiv.style.padding = '0px'
    }
    setInterval(animate1, 1000);
    setInterval(animate2, 2000);    
}

function firefoxTrue() {
    function animate3() {
        firefoxDiv.style.padding = '10px'
        firefoxDiv.style.transition = 'all 0.2s ease-in-out'
    }
    function animate4() {
        firefoxDiv.style.padding = '0px'
    }
    setInterval(animate3, 1000);
    setInterval(animate4, 3000);    
}

function explorerTrue() {
    function animate3() {
        explorerDiv.style.padding = '10px'
        explorerDiv.style.transition = 'all 0.2s ease-in-out'
    }
    function animate4() {
        explorerDiv.style.padding = '0px'
    }
    setInterval(animate3, 1000);
    setInterval(animate4, 3000);    
}

