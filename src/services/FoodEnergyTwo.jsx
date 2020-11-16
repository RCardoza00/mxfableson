import ChartCharacteristics from '../data/ChartCharacteristics.json';

const responseApi = response =>{
  
  
    function Food(ChartCharacteristics,data) {
        this.data=data;
        this.type=ChartCharacteristics[0]["type"];
        this.label=ChartCharacteristics[0]["label"];
        this.borderColor=ChartCharacteristics[0]["borderColor"];
        this.backgroundColor=ChartCharacteristics[0]["backgroundColor"];
        
      }
      
  

        var labels=[];
        var Protein_feasible=[];
        var Fat_feasible=[];
        var dataSet=[]
    
    
        if (response.length !==0) {
       
            response.forEach(item => {
              labels.push(item.Country);
              Protein_feasible.push(item.Protein_feasible);
              Fat_feasible.push(item.Fat_feasible);
            
          });
    
          var food = new Food(ChartCharacteristics["Protein_feasible"],Protein_feasible);
          dataSet.push(food);
          food = new Food(ChartCharacteristics["Fat_feasible"],Fat_feasible);
          dataSet.push(food);
    
          var data = {
            labels:labels,
            datasets:dataSet
          };
        
    
        }
      
      
return data;
}


export default function getFoodEnergyTwo(props)  
{

    try {
    
        return    fetch (`https://fable2020.herokuapp.com/foodenergy2${JSON.stringify(props)}`)
   
        .then(res=>res.json()).then(responseApi);
  
  
      } catch (error) {
        console.error(error)
      }
}