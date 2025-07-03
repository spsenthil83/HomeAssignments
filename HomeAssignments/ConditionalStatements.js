let browserName="Chrome"
let testType="Sanity"

function launchBrowser(){
if(browserName==="chrome"){
    console.log(`The browser for test execution is selected as "CHROME"`)
}else {
    console.log(`The browser for test execution is selected as "NOT A CHROME BROWSER"`)
}

}
function runTests(){
switch (testType){
      case "Sanity":
        console.log(`Test Type is selected as SANITY`)
        break            
    case "Regression":
        console.log(`Test Type is selected as REGRESSION`)
        break
    default:
        console.log(`Test type is selected as SMOKE`)
        break;
}
}
launchBrowser()
runTests()