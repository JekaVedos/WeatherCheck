fetch('https://api.openweathermap.org/data/2.5/weather?q=Slobozhanske&appid=8d9cbe108c3e1421ad10b3b9afc56e2f')
   .then(function (resp) { return resp.json() })
   .then(function (data) { 
      console.log(data);
      document.querySelector('.town1').textContent = data.name;
      document.querySelector('.temperature1').innerHTML = Math.round(data.main.temp - 273) + '&deg';
      document.querySelector('.clouds1').textContent = data.weather[0]['description'];
      document.querySelector('.icon1').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
      document.querySelector('.wind1').innerHTML =  `wind: ${data.wind.speed} m/s`;
   })
   .catch(function () {})


//


fetch('https://api.openweathermap.org/data/2.5/weather?q=Dnipro&appid=8d9cbe108c3e1421ad10b3b9afc56e2f')
   .then(function (resp) { return resp.json() })
   .then(function (data) { 
      console.log(data);
      document.querySelector('.town2').textContent = data.name;
      document.querySelector('.temperature2').innerHTML = Math.round(data.main.temp - 273) + '&deg';
      document.querySelector('.clouds2').textContent = data.weather[0]['description'];
      document.querySelector('.icon2').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
      document.querySelector('.wind2').innerHTML = `wind: ${data.wind.speed} m/s`;
   })
   .catch(function () {
      
   })


//


fetch('https://api.openweathermap.org/data/2.5/weather?q=Pidhorodne&appid=8d9cbe108c3e1421ad10b3b9afc56e2f')
   .then(function (resp) { return resp.json() })
   .then(function (data) { 
      console.log(data);
      document.querySelector('.town3').textContent = data.name;
      document.querySelector('.temperature3').innerHTML = Math.round(data.main.temp - 273) + '&deg';
      document.querySelector('.clouds3').textContent = data.weather[0]['description'];
      document.querySelector('.icon3').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
      document.querySelector('.wind3').innerHTML = `wind: ${data.wind.speed} m/s`;
   })
   .catch(function () {
      
   })





