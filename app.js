

window.addEventListener("load", ()=>{
    let long;
    let lat;

    let zone = document.querySelector(".loction-timezone");
    let description = document.querySelector(".temperature-description");
    let degree= document.querySelector(".temperature-degree");
    let iconUrl = document.querySelector(".location img");
   
    //grad long,lat from browser
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const key = 'f27dfa4faf819c04bc27001a943a3fdd';
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key} `; 

            fetch(api)
                .then(response =>{
                    return response.json();
                })
                .then(data =>{
                    console.log(data);
            
                 let temp = data.main.temp_max;
                 let celcius = ( temp -32) / 1.8 ;
                 let RawIcon = data.weather[0].icon;
                 let img = document.createElement("img");
                 img.src = "http://openweathermap.org/img/w/" + RawIcon + ".png";
                 let src = document.getElementById("icon");
                  
                 src.appendChild(img);
                 
                zone.textContent = data.name;
                description.textContent = data.weather[0].description;
                degree.textContent = Math.floor(celcius);
            
                
            
                    
                   
                });
        }); 
    }
      


});
