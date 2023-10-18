// load all url from redirect.yml
const YAML = require('yaml')
const fs = require('fs')
const path = require('path')

const redirectsFile = fs.readFileSync(path.join(__dirname, 'redirect.yml'), 'utf-8')
const redirect = YAML.parse(redirectsFile)

console.log(redirect)

// Generate html page for each redirect url from template.html

const templateHTML = fs.readFileSync(path.join(__dirname, 'templates.html'), 'utf-8')

// Loop through all redirect and generate page

for(let[slug, url] of Object.entries(redirect)) {
    console.log("Generating HTML page for ", slug)
    const html = templateHTML.replaceAll('https://example.com', url)
    console.log(html)
}
