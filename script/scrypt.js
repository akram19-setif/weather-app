//  Api weather
let weather={
  apiKey:"ca3bc60eba684e3f4e69fc69868fe872",
  fetchWeather:function(city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="
    +city+"&units=metric&appid="+
    this.apiKey)
    .then((response)=>response.json())
    .then((data)=>this.displayWeather(data));
  },
  displayWeather:function(data){
   //The Variables
   const {name}=data;
   const {icon , description}=data.weather[0];
   const {temp,humidity}=data.main;
   const {speed}=data.wind;
   
   //Select and Set elements
   document.querySelector('.city').innerHTML="Weather in "+name;
   document.querySelector('.icon').src=`https://openweathermap.org/img/wn/${icon}.png`;
   document.querySelector(".temp").innerHTML=temp+" °C";
   document.querySelector(".description").innerHTML=description;
   document.querySelector(".humidity").innerHTML="Humidity: "+humidity+"%";
   document.querySelector(".wind").innerHTML="Wind Speed: "+speed+" km/h";
   document.querySelector(".weather").classList.remove("loading");
   document.styleSheets[0].cssRules[1].style.setProperty('background-image', `url('https://source.unsplash.com/1600x900/?${name}')`,"important");
  // document.stylesheets[0].rules[0].style.setProperty("background-color", "red","important");
  },
  search:function(){
    this.fetchWeather(document.querySelector('.search-bar').value);
  }  
};
document.querySelector('.search-btn').addEventListener('click',function(){
  weather.search();
});
document.querySelector('.search-bar').addEventListener('keyup',function(event){
  if(event.key =="Enter"){
  weather.search();}
});
weather.fetchWeather("Algeria");
 






