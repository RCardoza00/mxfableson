import CountryCharacteristics from '../data/CountryCharacteristics.json';

const responseApi = response =>
{
    

       function NetForest(nameCountry, data) {
        let characteristic =CountryCharacteristics[nameCountry];
        if(characteristic!==undefined){
        this.data = data;
        this.type = characteristic[0]["type"];
        this.label = characteristic[0]["label"];
        this.borderColor = characteristic[0]["borderColor"];
        this.backgroundColor = characteristic[0]["backgroundColor"];
    }
      }

      
      

        var count = 0;
        var NetForestChange = [];
        var datasetAux = [];
        var labels = [];
        var nameCounty = "";
        var i=0;
        if (response.length !== 0) {
         
         
          nameCounty = response[0].name;
          response.forEach(item => {
            i++;
            if (!labels.includes(item.Year)) {
              labels.push(item.Year);
            }
    
            if (nameCounty !== item.Country || i ===response.length) {
    
              if (count !== NetForestChange.length ) {
                if(i ===response.length){NetForestChange.push(item.NetForestChange);}
                var netForest = new NetForest(nameCounty, NetForestChange);
                datasetAux.push(netForest);
              }
    
              count = 0;
              nameCounty = item.Country;
              NetForestChange = [];
    
            }
            NetForestChange.push(item.NetForestChange);
            count = item.NetForestChange === "0.00" ? count + 1 : count;
    
          });
    
        }
        
    

   
          var data = {
          labels: labels,
          datasets: datasetAux,
          CSV:response
        };
      
      

return data;

}

export default function getNetForesTwo(props)  {
    try {
       
   return    fetch ("https://fable2020.herokuapp.com/forestTwo" + JSON.stringify(props))
                  .then(res=>res.json()).then(responseApi);

      } catch (error) {
        console.error(error)
      }
}
