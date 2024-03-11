
var inputFile='elligible.csv';

const csv = require('csv-parser')
const fs = require('fs')
const results = [];
let arr = []
let fres = []
fs.createReadStream(inputFile)
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    // console.log(results);
 

    results.map(i=>{
  
        var greaterThanSeven = arr.filter(function(number) {
            return number.address ==  i.from+'';
          });
          
        console.log({greaterThanSeven});
        console.log(i.from+'');

        if(greaterThanSeven.length == 0){
            arr.push({"address" : i.from+'' , "amount":Number(i.value)})
        }else{
            arr.map(ii=>{
                if(ii.address == i.from+''){
                    console.log('am => ',ii.amount)
                    console.log('val = > ',i.value)

                    let new_amount =Number( ii.amount) + Number(i.value)
                    console.log({new_amount})
                    ii.amount = new_amount;

                }
            })
        }

       
    })
    // console.log(arr)
    fs.writeFile("res1.json", JSON.stringify(arr), (err) => {
      if (err)
        console.log(err);
      else {
        console.log("File written successfully\n");
  
      }
    });

});