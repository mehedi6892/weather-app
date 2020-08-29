//Creat api object
const api ={ 
  key: "3148acd8516a4f49b96899996c540f4f",
  base: "https://api.openweathermap.org/data/2.5/"
}

//function for Button Click
const clickBtn = document.getElementById('search-btn');
clickBtn.addEventListener('click',searchBox);

//function for search Box
function searchBox(){
   const searchValue = document.getElementById('search-box').value;
   getResults(searchValue)   
}

//weather result get function
function getResults(query) {
     fetch(`${api.base}weather?q=${query}&appid=${api.key}&units=metric`)
     .then(weather => {
        return weather.json();
     }).then(displayResults);
}

//Weather display Result in monitor
function displayResults(weather){ 
  let city = document.getElementById('cityName');
  city.innerText =`${weather.name}, ${weather.sys.country}`;

  let temp = document.getElementById('temperature-value');
  temp.innerText =`${Math.round(weather.main.temp)}`;

  let weatherCondition = document.getElementById('condition');
  weatherCondition.innerText = weather.weather[0].main;
}


