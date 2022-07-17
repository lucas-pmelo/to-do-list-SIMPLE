const inputText = document.querySelector('#input')
const submitButton = document.querySelector('#submit')
const clearListButtom = document.querySelector('.clear-list')

submitButton.addEventListener("click", event => {
    event.preventDefault()

    addToList()

    inputText.value = ''
})

clearListButtom.addEventListener("click", event => {
    event.preventDefault()

    removeList()
})

function getInputValue() {
    var inputVal = document.getElementById("input").value
    
    return inputVal
}

function addToList() {
    var ul = document.getElementById("list")
    var li = document.createElement('li')
    var inputVal = document.getElementById("input").value

    if(!inputVal){
        alert("Please add a task")
    }else{
        ul.appendChild(li)
    
        li.innerHTML=`<p>${getInputValue()}</p><button class='x-button' onclick='delElement(this)'>X</button><button class='done-button' onclick='doneButton(this)'>Done</button>`
    }
}

function removeList() {
    var ul = document.getElementById("list")

    ul.innerHTML=""
}

function delElement(element) {
    element.parentElement.remove() 
}

function doneButton(element) {
    console.log(element.parentElement.firstChild);
    element.parentElement.firstChild.classList.add("done")
    element.remove()
}