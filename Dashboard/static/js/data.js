//sample data to test buildtable function
let data  = [
    {
      name: "Michael Jordan",
      year: "1963",
      position: "SG",
      height: "77",
      weight: "225",
      steals: "400",
      assists: '60'
    },
    {name: "Kobe Bryant",
    year: "1978",
    position: "SG",
    height: "78",
    weight: "205",
    steals: "350",
    assists:'70'}
]

// API gateway endpoint
const url = 'https://f1n6f68yx1.execute-api.us-east-1.amazonaws.com/default/nba_viz';


 // data in this case is = to stringprediction
 d3.json('/api/lambdastuff').then(data=>{
  //do data stuff with 'data'
  console.log(data);
});