Element(<>head) -- element(h1) -- Text(title)
Element(<body>) -- element(input) -- type -- Text

														-- type -- Button





2.

console.log(document.domain)

console.log(document.URL)

console.log(document)

console.log(document.title)

document.title = 123;

console.log(document.doctype)

console.log(document.head)

console.log(document.body)

// console.log(document.all) // deprecated

// console.log(document.all[10])

console.log(document.forms[0])

console.log(document.links)

console.log(document.images)





3.1// add a span to the headerTitle and add style display:None

// if we use .innerHTML the content of span is hidden on the html page (as display is none) stills it gets logged on console

// but if we do headerTitle.innerText, the content of span is now hidden so the .innerText works in sync with the CSS.





3.2

var headrTitle = document.getElementById('main-header')

headrTitle.style.border = 'solid 3px #000'



3.3 

let item = document.getElementById('title')

item.style.fontWeight = 'bold'

item.style.color = 'green'