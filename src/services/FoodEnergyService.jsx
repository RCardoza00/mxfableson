
import ChartCharacteristics from '../data/ChartCharacteristics.json';

const responseApi = response =>{

  function Food(ChartCharacteristics,data) {
    this.data=data;
    this.type=ChartCharacteristics[0]["type"];
    this.label=ChartCharacteristics[0]["label"];
    this.borderColor=ChartCharacteristics[0]["borderColor"];
    this.backgroundColor=ChartCharacteristics[0]["backgroundColor"];
    this.radius=ChartCharacteristics[0]["radius"];
  }


  

    var labels=[];
    var target_mder=[];
    var kcal_feasible=[];
    var dataSet=[]


    if (response.length !==0) {
   
      response.forEach(item => {
          labels.push(item.Country);
          target_mder.push(item.Target_MDER);

          kcal_feasible.push(item.Kcal_feasible);
        
      });

      var food = new Food(ChartCharacteristics["target_mder"],target_mder);
      dataSet.push(food);
      food = new Food(ChartCharacteristics["kcal_feasible"],kcal_feasible);
      dataSet.push(food);

      var data = {
        labels:labels,
        datasets:dataSet,
        CSV:response

    };
   
  }


    return data;
}







export default function getFoodEnergy(props)  {
    try {
       
     
        return    fetch ("https://fable2020.herokuapp.com/foodenergy1" + JSON.stringify(props))
        .then(res=>res.json()).then(responseApi);

       
      } catch (error) {
        console.error(error)
      }
}
