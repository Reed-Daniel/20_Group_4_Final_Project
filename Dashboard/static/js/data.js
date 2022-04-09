//sample data to test buildtable function
let data  = [
    {
      name: "Michael Jordan",
      year: "1994",
      position: "SG",
      height: "77",
      weight: "225",
      points: "400",
      assists: "6"
    },
    {name: "Kobe Bryant",
    year: "2010",
    position: "SG",
    height: "78",
    weight: "205",
    points: "350",
    assists: "2"}
]

// API gateway endpoint
const url = 'https://4dql7xyhmb.execute-api.us-east-2.amazonaws.com/default/nba-viz';

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));