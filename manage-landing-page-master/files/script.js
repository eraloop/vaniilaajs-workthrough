ham = document.querySelector('.Hamburger')
list = document.querySelector('.list-items')
body = document.querySelector('body')

ham.addEventListener('click', e=>{
    ham.classList.toggle('Show')
    ham.classList.toggle('Close')


    list.classList.toggle('visible')
})

body.addEventListener('click', e=>{
    // if (list.classList.contains(".visible")){
    //     console.log('yes')
    // }else{
    //     console.log('false')
    // }
    
})