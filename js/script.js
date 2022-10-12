// VIEW PRODUCTS
if(document.querySelector('#viewProducts')){
    const viewProductsBtn = document.getElementById('viewProducts')
    const containerRight = document.querySelector('.container.right')
    viewProductsBtn.addEventListener('click',()=>{
        containerRight.style.transform = 'translateX(0)'
    })
}