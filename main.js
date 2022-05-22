//Get Elements 
const getExpense = document.querySelector('.submit-btn')
const dateValue = document.querySelector('.datee')
const amountValue = document.querySelector('.Amountt')
const nameValue = document.querySelector('.namee')
const items = document.querySelector('.items')
const btn = document.getElementById('cre')
const totalAmount = document.querySelector('.amount')


// Add Event Listners
getExpense.addEventListener('submit',expense);
items.addEventListener('click',remove)
btn.addEventListener('click',add)

//Add Elements
function expense(e){
    e.preventDefault();

//Create Elements
    const newItems = document.createElement('div');
    newItems.className = 'expense'
    items.appendChild(newItems)

    const expenseName = document.createElement('li')
    newItems.appendChild(expenseName)
    expenseName.innerText= nameValue.value

    const expenseDate = document.createElement('li')
    newItems.appendChild(expenseDate)
    expenseDate.innerText= dateValue.value

    const expenseAmount = document.createElement('li')
    newItems.appendChild(expenseAmount) 
    total.push (parseInt(expenseAmount.innerText= amountValue.value)) 


    const deleteBtn = document.createElement('p')
    deleteBtn.appendChild(document.createTextNode('X'))
    deleteBtn.className = 'h2'
    newItems.appendChild(deleteBtn)

    const display = document.querySelector('.template').remove()
    


}
// Create Delete Button
function remove(e){
    if(e.target.classList.contains('h2')){
       
        if(confirm('Are you sure')){
            var newItems = e.target.parentElement
            items.removeChild(newItems)
        }
    }
}
const total = []



function add(){
    const totalMoney = total.reduce(function(a,b){
        return a +b
        
    },0);
  
  totalAmount.innerText =  ` You have Spent a total of  #${totalMoney} Naira`

};




