let skills = document.querySelectorAll('ul');
let job_require = document.querySelectorAll('.job-requirements ul')
const form = document.querySelector('#my-form')
const listing_area = document.querySelector('.filter-listing-area')
const error = document.querySelector('.error')


// const filterJobs = (term) =>{
//     job_require.forEach(listing =>{
//     if(!listing.textContent.toLowerCase().includes(term)){
//         listing.parentElement.parentElement.classList.add('not-visible')   
//     }else{
//         listing.parentElement.parentElement.classList.remove('not-visible')  
//     }
//     })
// }

//  converting the array to nodelist to array then using the filter method to filter out the search
job_require = Array.from(job_require)
const filterJobs = (term)=>{
            job_require.filter(listing => !listing.textContent.toLowerCase().includes(term))
                   .forEach(listing =>  listing.parentElement.parentElement.classList.add('not-visible'));
};

form.addEventListener('submit', e =>{
    e.preventDefault() 
    if(form.inputData.value) {
        filterBy = form.inputData.value.trim().toLowerCase();
        console.log(filterBy)

        // parsing the filter value to the filter function
        filterJobs(filterBy);
        filter_node(filterBy)

        // adding the class of not visible to the error when a data has been entered.
        error.classList.add('not-visible')
        // reseting the form
        form.reset();
    }
    else{
        create_error();
    }
})

//  function to create error on submit empty form 
function create_error(){
    const error_text = `
     <p> Error : Please enter your filter parameter</p>
    `
    error.innerHTML += error_text;
}

// create new filter   
function filter_node(item){
        const html = `
        <p class="filter-text"><span>${item}</span><button class="delete">x</button></p>
        ` 
        listing_area.innerHTML += html;
}

// function to delete filters 
listing_area.addEventListener("click", e => {
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
       job_require.forEach( job =>{
        if(job.parentElement.parentElement.classList.contains('not-visible')){
            job.parentElement.parentElement.classList.remove('not-visible')
        }
       })
    }
})
