<<<<<<< HEAD
// API gateway endpoint
const url = 'C:/Users/Kelly/source/repos/Classes/20_Group_4_Final_Project/20_Group_4_Final_Project/Resources/modern_season_stats_clean.csv';
=======
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
  const res = await axios.get(
    "https://fathomless-everglades-46618.herokuapp.com/"
  );
  return res.data;
};
>>>>>>> ae41395d2c3ab07414e0409c9ee0f0409000d432

// // API gateway endpoint
// const url = 'https://f1n6f68yx1.execute-api.us-east-1.amazonaws.com/default/nba_viz';

<<<<<<< HEAD
// data in this case is = to stringprediction
d3.json('C:/Users/Kelly/source/repos/Classes/20_Group_4_Final_Project/20_Group_4_Final_Project/Resources/modern_season_stats_clean.csv').then(data);{
  //do data stuff with 'data'
  console.log(data);
};
=======
// // data in this case is = to stringprediction
// d3.json('/api/stuff').then(data=>{
//   //do data stuff with 'data'
//   console.log(data);
// });
>>>>>>> ae41395d2c3ab07414e0409c9ee0f0409000d432
