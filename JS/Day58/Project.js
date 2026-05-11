const btn = document.querySelector('#buttonn');

btn.addEventListener('click', () => {

    const location = document.querySelector('input');
    const place = location.value;

    // async function answer() {

    //     try {

    //         const response = await fetch(
    //             `https://api.weatherapi.com/v1/current.json?key=4193c7abac7f42f7958192534260405&q=${place}&aqi=yes`
    //         );

    //         const finaldata = await response.json();

    //         document.querySelector('#result').innerHTML =
    //         `${finaldata.current.temp_c}°C`;

    //     } catch(error) {

    //         console.log(error);

    //     }
    // }

    // answer();

    if(place === ""){
        return;
    }
    
    const pro = fetch( `https://api.weatherapi.com/v1/current.json?key=4193c7abac7f42f7958192534260405&q=${place}&aqi=yes`);


    pro
    .then((response) => response.json())
    .then(data => document.querySelector('#result').innerHTML = data.current.temp_c)
    .catch(error => console.log("error"));

});
