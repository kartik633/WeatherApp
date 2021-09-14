// document.addEventListener("DOMContentLoaded", function(event) {
//   alert('Hey')
// });

const cityName = document.getElementById('cityName');

const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');

const temp_status = document.getElementById('temp_status');

const temp_real_val = document.getElementById('temp_real_val');

const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) =>{
  event.preventDefault();

  let cityVal = cityName.value;

  // document.alert('hg');

  if(cityVal === "")
  {
    city_name.innerText = 'Plz write the name before search';
    datahide.classList.add('data_hide');
  }
  else
  {
    // city_name.innerText = cityVal;
    // console.log(cityVal);
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=4c1d81ce7d8bee3c9a3e4beb93017b16`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const arrData = [data];

      city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;

      console.log(arrData[0].name);

      // console.log(arrData[0].main.temp);
      // console.log(arrData[0].weather[0].main);

      temp_real_val.innerText = arrData[0].main.temp;
      // temp_status.innerText = arrData[0].weather[0].main;

      const tempMood = arrData[0].weather[0].main;

      if(tempMood == "Clear"){
        temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'</i>";
      }else if(tempMood == "Clouds"){
        temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'</i>";
      }else if(tempMood == "Rain"){
        temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;'</i>";
      }else {
        temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'</i>";
      }

      datahide.classList.remove('data_hide');


    }catch{
        city_name.innerText = 'wrong city name';
        datahide.classList.add('data_hide');
    }
  }


}

submitBtn.addEventListener('click',getInfo);
