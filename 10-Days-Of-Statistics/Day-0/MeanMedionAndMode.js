/**
 * Mean ,Median And Mode
 */

function processData(input) {
    let count=input.split("\n")[0];
    let inputs=input.split("\n")[1].split(" ").map((item)=>item.length < 5 ? 0+item:item);
    let sum=inputs.reduce((acc,curr)=>parseFloat(acc)+parseFloat(curr));
    let mean=sum/count;
    let sortedArray=inputs.sort();
    let median=count %2 ===0 ? (parseFloat(sortedArray[count/2])+parseFloat(sortedArray[(count/2)-1]))/2 :parseFloat(sortedArray[(count+1)/2]);
    let resultsMode=[];
    let mode;
    for(let i=0;i<sortedArray.length;i++){
        if(sortedArray[i] === sortedArray[i+1]){
            resultsMode.push(sortedArray[i]);
        }
    }
    if(!resultsMode.length){
        mode=sortedArray[0];
    }


    console.log(mean);
    console.log(median);
    console.log(mode);
}

processData("10\n64630 11735 14216 99233 14470 4978 73429 38120 51135 67060");
