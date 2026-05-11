const btn = document.querySelector("#buttonn");
const place = document.querySelector("#input");
const show = document.querySelector("#weatherInfo");

btn.addEventListener("click", () => {
  const location = place.value;

  if (location === "") {
    return;
  }

  const promise = fetch(
    `https://api.weatherapi.com/v1/current.json?key=4193c7abac7f42f7958192534260405&q=${location}&aqi=no`,
  );

  async function detail() {
    try {
      const data = await promise;

      const finaldata = await data.json();

      show.innerHTML = `
        <h2>${finaldata.location.name}</h2>
        <p>Temperature: ${finaldata.current.temp_c}°C</p>
        <p>Condition: ${finaldata.current.condition.text}</p>
        <p>Humidity: ${finaldata.current.humidity}%</p>
      `;
    } catch (error) {
      console.log(error);
    }
  }

  detail();
});
