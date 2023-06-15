var SpreadSheetID = "13b9X66SQBtmTK2ytzSDRjkh8aWBEKQWerg8CQMSyLJc"
var SheetNames = ["Sheet1"]

function diff_people(){
  var ss = SpreadsheetApp.openById(SpreadSheetID);
  var list_people = ss.getSheetByName(SheetNames);

  var people = getPeople(list_people);

  console.log(people.slice(0, 3));

  // https://hackernoon.com/how-to-update-object-key-values-using-javascript/
  for(let person of Object.keys(people)){
    // console.log(people[person].Analyst);
    // people[person].Analyst = people[person].Analyst.trim();
    people[person].Analyst = people[person].Analyst.replace(/\s/g, "");
    
  }
  
  console.log(people.slice(0, 3));

  // FINDS DISTINCT INITIALS
  const distinct = [...new Set(people.map(item => item.Analyst))];
  console.log(distinct);

  // const no_space = people.map(person => person.Analyst.trim());
  // console.log(no_space);
  // const no_space = people.map(({Analyst: person}) => ({Analyst: person.Analyst.trim()}));
  // console.log(no_space);


  // no_space = [];
  // people.forEach(function(no_spaces){
  //   no_space.push(no_spaces.Analyst.trim())
  // });
  // console.log(no_space);


  // for (const no_spaces in people) {
  //   no_spaces(no_spaces.Analyst.trim());
  //   console.log(no_spaces);
  //   // console.log(people['Analyst']);
  // }


  // var distinct = []
  // for (var i = 0; i < people.length; i++)
  //   if (array[i].Analyst not in distinct)
  //     distinct.push(array[i].age)
}

function getPeople(media){
  var dataArray = [];
  // collecting data from 2nd Row , 1st column to last row and last    // column sheet.getLastRow()-1
  var rows = media.getRange(2,1,media.getLastRow()-1, media.getLastColumn()).getValues();
  for(var i = 0, l= rows.length; i<l ; i++){
    //skip empty values: check if item name (rows[i][0]) is blank, then dont add to dataArray
    if (rows[i][0] !== ''){
      var dataRow = rows[i];
      var record = {};
      record['Analyst'] = dataRow[0];
      dataArray.push(record);
    }
  }
  return dataArray;
}
