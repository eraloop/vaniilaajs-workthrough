ham = document.querySelector('.Show');
navbar = document.querySelector('.navbar-links ul');
close = document.

ham.addEventListener('click', (e)=>{
    e.preventDefault();
    ham.classList.toggle('Show')
    ham.classList.toggle('Close');

    

   console.log('u clicked')

})
