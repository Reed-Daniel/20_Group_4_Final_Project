const fetchData = async () => {
    const res = await axios.get("https://fathomless-everglades-46618.herokuapp.com/");
    return res.data;
}


// API gateway endpoint
// const url = 'C:/Users/Kelly/source/repos/Classes/20_Group_4_Final_Project/20_Group_4_Final_Project/Resources/modern_season_stats_clean.csv';


// const url = 'https://f1n6f68yx1.execute-api.us-east-1.amazonaws.com/default/nba_viz';

// d3.json('/api/stuff').then(data=>{

//   console.log(data);
// });
