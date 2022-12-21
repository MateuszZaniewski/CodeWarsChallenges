// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"


function domainName(url){
    let newUrl = ''
    if(url.startsWith('https://www.')){
        newUrl = url.slice(12)
        for(let i = 0; i < newUrl.length; i++){
            if(newUrl[i] == '.'){
                return newUrl.slice(0,i)
            }
        }
    }
    if(url.startsWith('http://www.')){
        newUrl = url.slice(11)
        for(let i = 0; i < newUrl.length; i++){
            if(newUrl[i] == '.'){
                return newUrl.slice(0,i)
            }
        }
    }

    else if(url.startsWith('https://')){
        newUrl = url.slice(8)
        for(let i = 0; i < newUrl.length; i++){
            if(newUrl[i] == '.'){
                return newUrl.slice(0,i)
            }
        }
    }

    else if(url.startsWith('http://')){
        newUrl = url.slice(7)
        for(let i = 0; i < newUrl.length; i++){
            if(newUrl[i] == '.'){
                return newUrl.slice(0,i)
            }
        }
    }

    else if(url.startsWith('www')){
        newUrl = url.slice(4)
        for(let i = 0; i < newUrl.length; i++){
            if(newUrl[i] == '.'){
                return newUrl.slice(0,i)
            }
        }
    }
    else {
        for(let i = 0; i < url.length; i++){
            if(url[i] == '.'){
                return url.slice(0,i)
            }
        }
    }
  }

console.log(domainName("http://www.zombie-bites.com"))