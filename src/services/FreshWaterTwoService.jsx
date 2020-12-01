import CountryCharacteristics from '../data/CountryCharacteristics.json';

const responseApi = response =>{
console.log(response);

    
    function FreshWaterTwo(nameCountry, data) {


        let characteristic = CountryCharacteristics[nameCountry];
    
        if (characteristic !== undefined) {
          this.data = data;
          this.type = characteristic[0]["type"];
          this.label = characteristic[0]["label"];
          this.borderColor = characteristic[0]["borderColor"];
          this.backgroundColor = characteristic[0]["backgroundColor"];
        }
    
      }





    var dataBlueWater = [];
    var count = 0;
    var i=0;
    var freshWater = [];
    var labels = [];
    var nameCounty = ""
    if (response.length !==0) {
      nameCounty=response[0].name;
      response.forEach(item => 
        {
        i++;
        if (!labels.includes(item.Year)) {
          labels.push(item.Year);
        }
       
        if (nameCounty !== item.Country || i ===response.length) {
          if(count!==dataBlueWater.length)
          {

          if(i ===response.length)
          {dataBlueWater.push(item.BlueWater);}
          var fresh = new FreshWaterTwo(nameCounty, dataBlueWater);
          freshWater.push(fresh);
          }
          nameCounty = item.Country;
          dataBlueWater = [];
          dataBlueWater.push(item.BlueWater);
        }

        dataBlueWater.push(item.BlueWater);
        count = item.BlueWater === "0.00"? count + 1 : count;
      });


    }
    var data = {
      labels: labels,
      datasets: freshWater
    };

  console.log(data);
  return data = {
    Chart:data,
    CSV:response
};




}

export default function getLandCover(props)  
{

    try {
    
        return fetch (`https://fable2020.herokuapp.com/freshwater2${JSON.stringify(props)}`)
   
        .then(res=>res.json()).then(responseApi);
  
  
      } catch (error) {
        console.error(error)
      }
}