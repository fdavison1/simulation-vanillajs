let id = 0

function getTotal(){
    const amounts = document.querySelectorAll('.list-amount')
    let numArr = []
    console.log(amounts)

    for (let i = 0; i < amounts.length; i++){
        numArr.push(+amounts[i].innerText)
    }
    console.log(numArr)

    let total = 0
    if(numArr.length > 0){
    total = numArr.reduce(function(acc, num){
        return acc += num
    })
}

    let totalHold = document.querySelector('.total-text')
    totalHold.innerText = `Budget Total: $${total}`
}

function addItem(){
    const nameInput = document.querySelector('#expense-name')
    const amountInput = document.querySelector('#expense-amount')
    
    let newItem = document.createElement('li')
    newItem.classList.add('list-item')
    newItem.id = id

    newItem.innerHTML = `
    <label>${nameInput.value}</label>
    <p class='list-amount'>${amountInput.value}</p>
    <img onclick='removeItem(${id})' src='./assets/trash_can.svg'/>`

    const list = document.querySelector('#expense-list')
    list.append(newItem)

    nameInput.value = ''
    amountInput.value = ''
    id++
    getTotal()
}

function removeItem(id){
    // let item = document.querySelectorAll('#id')
    // item.remove()

    // getTotal()
    let clear = event.target.parentNode
    clear.remove()

    getTotal()
}


