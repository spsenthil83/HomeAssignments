const browserVersion ='Chrome'  //global scoped

function getBroswerVersion(){
    if(browserVersion==='Chrome')
    {
        let browserVersion='Edge' //block scoped
        console.log(browserVersion)
    }
    console.log(browserVersion)
}

getBroswerVersion()