export default function getTasks(task, price, contentContainer, mode){
    const stringArr = task.value.toLowerCase().split(" ")
    
    let taskContainer = document.createElement('div')
    taskContainer.classList.add('input--info')
    taskContainer.id = stringArr.join("--")
    
    let taskElement=document.createElement('p')
    taskElement.innerText=task.value

    let removeButton= document.createElement('button')
    removeButton.classList.add('remove--btn')
    mode && removeButton.classList.add('darkMode--remove')
    removeButton.innerText='remove'

    let priceElement = document.createElement('p')
    priceElement.innerHTML=`<span class="dollar">$</span>${price.value}`

    taskContainer.appendChild(taskElement)
    taskContainer.appendChild(removeButton)
    taskContainer.appendChild(priceElement)

    contentContainer.appendChild(taskContainer)
}