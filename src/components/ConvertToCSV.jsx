        
const ObjecToCsv= (dataa) => {
          const csvRows=[];
          const headers=Object.keys(dataa[0]);
          csvRows.push(headers.join(','));
          console.log("lmao")
          for(const row of dataa){
          const values=  headers.map(header=>{
              return row[header];
            });
            csvRows.push(values.join(','))

          }
          const f=csvRows.join('\n');


        /** 
        const json=data
        const datos=response.map(row =>({
          Pasture: row.CalcPasture,
          Cropland:row.CalcCropland,

        }) 
          
          )
          */
         const blob=new Blob ([f],{type: 'text/csv'});
         const url = window.URL.createObjectURL(blob)
         const a=document.createElement('a');
         a.setAttribute('hidden', '');
         a.setAttribute ('href',url);
         a.setAttribute('download','chartData.csv');
         document.body.appendChild(a);
         a.click();
         document.body.removeChild(a);
       

        }
export default ObjecToCsv