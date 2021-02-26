key = "zuCG0zFWgIAfiGHN9LvkYd43jVhtf2St";

// get weather info

const getWeather = async(id) =>{
    base = "http://dataservice.accuweather.com/currentconditions/v1/"
    query = `${id}?apikey=${key}`;

    const response = await fetch(base+query);
    const data = await response.json()
    return data[0];

}
// get city info
const getCity = async(city)=>{

    base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base+query);
    const data = await response.json();

   return data[0]

}

// getCity('manchester')
// .then(res =>{
//     return getWeather(res.Key)
// }).then(res => {
//     console.log(res); 
// })

// .catch(err =>console.log(err))
