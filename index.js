import getTasks from "./task.js"
import getResults from "./result.js"

// GETTER ELEMENTS
const taskInput = document.getElementById('task')
const priceInput = document.getElementById('prices--opts')
const addBtn=document.getElementById('add--btn')
const sendBtn= document.getElementById('send--btn')
let darkModeInput= document.getElementById('changeTheme')



// SETTER ELEMENTS
const tasks= document.querySelector('.inputs--information')
const totalInvoice= document.querySelector('.sum--total--value')
const darkModeLabel= document.querySelector('.txt')
const headerEl=document.querySelector('header')

// DATA STORAGE ELEMENTS
let totalCount=[]
let listArr=[]
let darkMde=false


getResults(totalCount, totalInvoice)


addBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    if(taskInput.value && !listArr.find(task => task === taskInput.value)){
        getTasks(taskInput, priceInput, tasks, darkMde)
        getResults(totalCount, totalInvoice, parseInt(priceInput.value))
        listArr.push(taskInput.value)
        taskInput.value=""
        priceInput.value="10"
    }
    
})

document.addEventListener('click', (e)=>{
    if (e.target.classList.contains("remove--btn")){
        const parentContainer = e.target.parentElement
        const priceToRemove=`-${parentContainer.lastElementChild.innerText.substring(1)}`
        getResults(totalCount, totalInvoice,parseInt(priceToRemove))
        parentContainer.remove()
    }
})

sendBtn.addEventListener('click', ()=>{
    totalCount=[]
    listArr=[]
    tasks.innerHTML=''
    getResults(totalCount, totalInvoice)
})

darkModeInput.addEventListener('input', ()=>{
    console.log(darkModeInput.checked)

    if(darkModeInput.checked){
        darkMode()

    }   else {
        noDark()
    }
    
    const taskElements = document.querySelectorAll('.input--info');
    taskElements.forEach(taskElement => {
        if (darkMde) {
            taskElement.querySelector('.remove--btn').classList.add('darkMode--remove');
        } else {
            taskElement.querySelector('.remove--btn').classList.remove('darkMode--remove');
        }
    })
})

function darkMode(){
    document.body.classList.add('darkMode--body')
    headerEl.classList.add('darkMode--header')
    darkModeLabel.classList.add('darkMode--label')
    darkModeInput.checked = true
}

function noDark(){
    document.body.classList.remove('darkMode--body')
    headerEl.classList.remove('darkMode--header')
    darkModeLabel.classList.remove('darkMode--label')
    darkModeInput.checked = false
}
