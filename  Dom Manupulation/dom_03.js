// add list item in js 
function addLanguage(langName) {
    const li = document.createElement('li')
    li.innerHTML = `${langName}`
    document.querySelector('.language').
    appendChild(li)
}
addLanguage("python")
addLanguage("java")
addLanguage("typeScript")

// add optimize lang

function addLangOptimize(langName) {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(langName))
    document.querySelector('.language').appendChild(li)

}
addLangOptimize("gendu")
addLangOptimize("Amiya")

// Edit the value

const secondLang = document.querySelector("li:nth-child(2)")
// secondLang.innerHTML = "C++" // correct but not use 

const newli = document.createElement('li')
newli.textContent = "mojo"
// secondLang.replaceWith(newli)

