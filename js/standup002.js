//standup002
//Write a function that when giving a URL as a string, parses out just the domain name and returns it as a string. for ex:
//domainName("hhtps//:github.com/asesome-project/username") === 'github'
//notes: url trad no funny biz, str

function parseDomainName(url){
    return url.replace('https://','').replace('www.','').split('.')[0]
    //replace the stuff upfront
    
    //split grabbing the first value
}

console.log(parseDomainName('https://github.com/asesome-project/username'))//'github'
console.log(parseDomainName('https://www.xombie-bites.com'))//xombie-bites
console.log(parseDomainName('https://www.cnet.com'))//cnet