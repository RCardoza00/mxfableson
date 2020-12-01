import CountryCharacteristics from '../data/CountryCharacteristics.json';

const responseApi = response => {
console.log("response")
console.log(response);
  function Biodiversity(nameCountry, data) {


    let characteristic = CountryCharacteristics[nameCountry];

    if (characteristic !== undefined) {
      this.data = data;
      this.type = characteristic[0]["type"];
      this.label = characteristic[0]["label"];
      this.borderColor = characteristic[0]["borderColor"];
      this.backgroundColor = characteristic[0]["backgroundColor"];
    }

  }
  var count = 0;
  var i=0;
  var dataBiodiversity_land = [];
  var biodiversities = [];
  var labels = [];
  var nameCountry = "";

  if (response.length !== 0) {
    
    nameCountry = response[0].name;
    response.forEach(item => {
      i++;
     
      if (!labels.includes(item.Year)) {
        labels.push(item.Year);
      }

      if (nameCountry !== item.Country || i ===response.length) {
       

        if (count !== dataBiodiversity_land.length) {
          if(i ==response.length){dataBiodiversity_land.push(item.Protected_land);}
          var biodiversity = new Biodiversity(nameCountry, dataBiodiversity_land);
          biodiversities.push(biodiversity);
        }
        count = 0;
        nameCountry = item.Country;
        dataBiodiversity_land = [];

      }
      dataBiodiversity_land.push(item.Protected_land);
      count = item.Biodiversity_land === "0.00" ? count + 1 : count;
    });


  }
  var data = {
    labels: labels,
    datasets: biodiversities,
    CSV:response
  };


  return data;
}


export default function getBiodiversity(props) {

  try {
   
  
    return fetch(`https://fable2020.herokuapp.com/biodiversity${JSON.stringify(props)}`)
      .then(res => res.json()).then(responseApi);




  } catch (error) {
    console.error(error)
  }
}

