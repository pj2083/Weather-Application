const inputTxt = document.querySelector('.inputTxt');
const button = document.querySelector('.btn');
const showData = document.querySelector('.showData');

const API_Key = "ebe8bc80775f683f2f1f1cb25b020176";
button.addEventListener("click", () => {
    let cityInput = inputTxt.value;
    // console.log(cityInput);
    let fetchRes = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${API_Key}`);
    fetchRes.then(res =>
        res.json()).then(d => {
            console.log(d);
            inputTxt.value = " ";
            showData.innerHTML =
            `
            <ul  class="description">
                <li class="desc">${d.weather[0].description}</li>
                <li class="city">${d.name}</li>
                <li class="temp">${d.main.temp}°c</li>
            </ul>
            `; 
            
        });
        showData.innerHTML=`<ul class="description">
        <li class="desc">No Data Found</li>
        <li class="city">Location Unavaiable</li>
        <li class="temp">--°c</li>
    </ul>`;
});
