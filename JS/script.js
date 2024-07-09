function increase(){
    valueIncrease('count')
}
const minusBtn = document.getElementById('minus-btn').addEventListener('click', function(){
    const firstElement = document.getElementById('count');
    firstElement.innerText = sum-=1
})