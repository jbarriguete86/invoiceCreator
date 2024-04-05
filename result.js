export default function getResults(counter, elementContent,price = 0, ){
    counter.push(price)
    const totalCounter = counter.reduce((accum, acc)=>accum + acc)
    elementContent.innerText=totalCounter
    return counter
}