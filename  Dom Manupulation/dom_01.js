document.getElementsByClassName('list-item')
const myTEmplist = document.getElementsByClassName('list-item')

const myConAry = Array.from(myTEmplist);

myTEmplist.forEach(function (li) {
    li.style.color = 'red';
})