const readline = require('readline');
const fs = require('fs');
var header = [];
var isHeader = true;
const rl = readline.createInterface({
    input: fs.createReadStream('file.csv')
});
var temp={},temp2={},temp3={};
var json=[],json2=[],json3=[];
var typeRob = {};
var yearObj = {};
rl.on('line', function(line) {
    var lineRecords = line.trim().split(',');
    if (isHeader) 
    {
        header = lineRecords;//getting headers
    } 
    else 
    {
        year = lineRecords[2].split(" ")[0].split("/")[2];
        if (lineRecords[5] === "ROBBERY" || lineRecords[5] === "BURGLARY" || lineRecords[5] === "CRIMINAL DAMAGE") 
        {
            if (!yearObj[year]) 
            {
                yearObj[year] = {};
            }
            if (lineRecords[5] === "ROBBERY") 
            {
                if (yearObj[year].rob)
                    yearObj[year].rob++;
                else
                    yearObj[year].rob = 1;
                if (typeRob[lineRecords[6]])
                    typeRob[lineRecords[6]]++;
                else
                    typeRob[lineRecords[6]] = 1;
            }
            else if (lineRecords[5] === "BURGLARY") 
            {
                if (yearObj[year].bul)
                    yearObj[year].bul++;
                else
                    yearObj[year].bul = 1;
            }
            if (lineRecords[5] === "CRIMINAL DAMAGE") 
            {
                if (lineRecords[6] === "TO VEHICLE") 
                {
                    if (yearObj[year].toVehical)
                        yearObj[year].toVehical++;
                    else
                        yearObj[year].toVehical = 1;
                }
                else if (lineRecords[6] === "TO PROPERTY") 
                {
                    if (yearObj[year].toProperty) 
                        yearObj[year].toProperty++;
                    else 
                        { 
                            yearObj[year].toProperty = 1; 
                        }
                } 
                else if (lineRecords[6] === "TO STATE SUP PROP") 
                {
                    if (yearObj[year].toSSP) 
                        yearObj[year].toSSP++;
                    else 
                        { 
                            yearObj[year].toSSP = 1; 
                        }
                }   
            }
        }
    }
    isHeader = false;
}
);
function json1Write(yearObj)
{
    Object.keys(yearObj).forEach(function(key,index)//iterating through Key  
    {
    temp["year"]=key;
    Object.keys(yearObj[key]).forEach(function(key2,index) //iterating through values
    {
        console.log(key2);
        if(key2==="toProperty"||key2==="toVehical"||key2==="toSSP")
            temp[key2]=yearObj[key][key2];
        });
    json.push(temp);
    temp={};
    });

    
     fs.writeFileSync("json1.json", JSON.stringify(json)); 
     return true;
 
}
function json2Write(typeRob){
    Object.keys(typeRob).forEach(function(key,index) 
    {
    temp2["type"]=key;
    temp2["value"]=typeRob[key];
    json2.push(temp2);
    temp2={};

    });
        fs.writeFileSync("json2.json", JSON.stringify(json2));

    return true;    
}
function json3Write(yearObj)
{
   Object.keys(yearObj).forEach(function(key,index) 
    {
    temp3["year"]=key;
    Object.keys(yearObj[key]).forEach(function(key2,index) 
    {
        console.log(key2);
        if(key2==="rob"||key2==="bul")
            temp3[key2]=yearObj[key][key2];
    });
    json3.push(temp3);
    temp3={};
    fs.writeFileSync("json3.json", JSON.stringify(json3));
}); 
   return true;
    }

rl.on('close', function() {
    json1Write(yearObj);
    json2Write(typeRob);
    json3Write(yearObj);    
});
