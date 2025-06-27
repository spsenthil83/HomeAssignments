let browserName=''

// key = variableName (browserName)
// value = value(Chrome)
switch (browserName) {
    case "edge":
        console.log("Edge browser")
        break            //break will break the execution, else it will go to the next case "chrome".
    case "chrome":
        console.log("Chrome browser")
        break
    default:
        console.log("No browser")
        break;
    }