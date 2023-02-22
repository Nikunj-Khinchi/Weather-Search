$(".content").hide();
const fetchData = async()=>{
    var a = $("#input").val();
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${a}&appid=fe97615ca000e69ef624ad5bdf7846dd&units=metric`,{
        method:'GET',
    });
    // change the data to the json format
    const data = await response.json()

   if(data.cod == 400)
   {
    $(".cnt").hide();
    $(".error-heading").html("400 : Bad Request")
   } 
   else if(data.cod == 404){
        $(".cnt").hide();
        $(".error-heading").html("404 : Location Not Found")
    }else{
    const temp = data.main.temp
    const description =data.weather[0].description
    const icon = data.weather[0].icon
    const name = data.name;
    const humidity = data.main.humidity
    const WindSpeed = data.wind.speed
    const country = data.sys.country

    $(".content").show();

    $("#loc").html(name + " - " + country);
    $("#temp").html(temp + " °C");
    $("#weather").html(description);
    $("#humidity").html(humidity + "%");
    $("#w-speed").html(WindSpeed);
    // http://openweathermap.org/img/wn/01n@2x.png
    document.querySelector("img").src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    }
}
