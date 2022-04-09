//sample data to test buildtable function
let data  = [
    {
      name: "Michael Jordan",
      year: "1963",
      position: "SG",
      height: "77",
      weight: "225",
      steals: "400",
    },
    {name: "Kobe Bryant",
    year: "1978",
    position: "SG",
    height: "78",
    weight: "205",
    steals: "350",}
]

// API gateway endpoint
const url = 'https://f1n6f68yx1.execute-api.us-east-1.amazonaws.com/default/nba_viz';

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));