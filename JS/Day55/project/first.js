// document.querySelector('button').addEventListener('click',(event)=>{

//     const place = document.getElementById('location').value;
    
//     function updateTemp(data){
//        const element = document.getElementById('weatherInfo');
//        element.innerHTML = `Today's Temperature: ${data.current.temp_c}`;
//     }

//     const prom = fetch(`http://api.weatherapi.com/v1/current.json?key=4193c7abac7f42f7958192534260405&q=${place}&aqi=yes`)
    
//     prom
//     .then(response=>response.json())
//     .then(data=> updateTemp(data));
// })


//OR WE HAVE SHORTCUT LIKE -----------------------------------------------------------------------------------------------------------------

document.querySelector('button').addEventListener('click',(event)=>{

    const place = document.getElementById('location').value;
    
 
    const prom = fetch(`http://api.weatherapi.com/v1/current.json?key=4193c7abac7f42f7958192534260405&q=${place}&aqi=yes`)
    
    prom
    .then(response=>response.json())
    .then(data=> document.getElementById('weatherInfo').innerHTML = `Today's Temperature: ${data.current.temp_c}`);
})
