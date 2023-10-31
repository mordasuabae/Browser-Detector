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
    }
    //firefox
    if(browser === 'firefox'){
        firefox.innerHTML = '<img src="Firefox.png" alt="">'  
        firefoxDiv.style.padding = '0px'
    }
    // microsoft edge
    if(browser === 'edg'){
        explorer.innerHTML = '<img src="Explorer.png" alt="">'  
        explorerDiv.style.padding = '0px'
    }
    //safari

}