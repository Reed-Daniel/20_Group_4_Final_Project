//sample data to test buildtable function
let data = [
  {
    name: "Michael Jordan",
    year: "1994",
    position: "SG",
    height: "77",
    weight: "225",
    steals: "400",
    assists: "60",
  },
  {
    name: "Kobe Bryant",
    year: "2010",
    position: "SG",
    height: "78",
    weight: "205",
    steals: "350",
    assists: "70",
  },
];

const fetchData = async () => {
  const res = await axios.get("http://localhost:4000/");
  return res.data;
};

// // API gateway endpoint
// const url = 'https://f1n6f68yx1.execute-api.us-east-1.amazonaws.com/default/nba_viz';

// // data in this case is = to stringprediction
// d3.json('/api/stuff').then(data=>{
//   //do data stuff with 'data'
//   console.log(data);
// });
