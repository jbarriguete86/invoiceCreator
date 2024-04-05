import getTasks from "./task.js"
import getResults from "./result.js"

// GETTER ELEMENTS
const taskInput = document.getElementById('task')
const priceInput = document.getElementById('prices--opts')
const addBtn=document.getElementById('add--btn')
const sendBtn= document.getElementById('send--btn')
const darkModeInput= document.getElementById('dark--mode')

// SETTER ELEMENTS
const tasks= document.querySelector('.inputs--information')
const totalInvoice= document.querySelector('.sum--total--value')
const darkModeLabel=document.getElementById('dark--label')
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
        console.log('clicked on a remove button')
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
    if(darkModeInput.value == 1){
        darkModeLabel.innerText = 'Dark mode'
        document.body.classList.add('darkMode--body')
        headerEl.classList.add('darkMode--header')
        darkMde = !darkMde
    } else {
        darkModeLabel.innerText = 'Light mode'
        document.body.classList.remove('darkMode--body')
        headerEl.classList.remove('darkMode--header')
        darkMde = !darkMde
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
