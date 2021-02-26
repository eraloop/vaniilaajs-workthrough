const cityForm = document.querySelector('form')
const card = document.querySelector(".card")
const details = document.querySelector(".details")
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')
// updating the ui using a function
  
const updateUI = (data)=>{
    // distructuring the data from the data object
    // const cityDetails = data.cityDetails;
    // const weather = data.weather;
    console.log(data)

    const {cityDetails, weather} = data;

    // update the night and day image and icons
    const iconSrc = `../images/icons/${weather.WeatherIcon}.svg`

    let timeSrc = null
    if(weather.IsDayTime){
        timeSrc = '../images/day.svg'
    }else{
        timeSrc = '../images/night.svg'
    }

    time.setAttribute('src', timeSrc)
    icon.setAttribute('src', iconSrc)
    // updating the template

    details.innerHTML = 
    `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `

}

// function to update city

const updateCity = async(city)=>{
    const cityDetails = await getCity(city);
    const weather  = await getWeather(cityDetails.Key);

    return { 
        cityDetails,
        weather
    }
}

cityForm.addEventListener("submit", e=>{
    e.preventDefault();

    const city = cityForm.city.value.trim().toLowerCase()
    cityForm.reset()
    // removing the display none property from the card
    card.classList.remove("not-visible")

    // update the ui with the new city 
    updateCity(city)
        .then(res =>
            updateUI(res))
        .catch(err => 
            console.log(err))

})