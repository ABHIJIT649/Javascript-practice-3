// add list item in js
function addLanguage(langName) {
    const li = document.createElement('li');
    li.innerHTML = `${langName}`
    document.querySelector('.language').
    appendChild(li)
}
addLanguage("python")
addLanguage("java")
addLanguage("typeScript")