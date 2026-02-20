const cartIcon = document.getElementById('cart-icon');
const cartMenu =document.querySelector('.cart-menu')


cartIcon.addEventListener("click",()=>{
    
    cartMenu.classList.toggle('active')

})

document.addEventListener('click',(e)=>{

    if(!cartIcon.contains(e.target) && !cartMenu.contains(e.target)){

         cartMenu.classList.remove('active')

    }
})