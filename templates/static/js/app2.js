// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}

function handleClick() {
  // Grab the name value from the filter
  let names = d3.select("#name").property("value");
  let years = d3.select("#year").property("value");
  let positions = d3.select("#position").property("value");
  let height = d3.select("#height").property("value");
  let weight = d3.select("#weight").property("value");
  let points = d3.select("#points").property("value");
  let assists = d3.select("#assists").property("value");
  let filteredData = tableData;

   // Check to see if a name was entered and filter the
  // data using that name.
  if (names) {
    // Apply `filter` to the table data to only keep the
    // rows where the `name` value matches the filter value
    filteredData = filteredData.filter(row => row.name === names);
  };

  if (years) {
    // Apply `filter` to the table data to only keep the
    // rows where the `name` value matches the filter value
    filteredData = filteredData.filter(row => row.year === years);
  };

  if (positions) {
    // Apply `filter` to the table data to only keep the
    // rows where the `name` value matches the filter value
    filteredData = filteredData.filter(row => row.position === positions);
  };

  if (height) {
    // Apply `filter` to the table data to only keep the
    // rows where the `name` value matches the filter value
    filteredData = filteredData.filter(row => row.height === height);
  };

  if (weight) {
    // Apply `filter` to the table data to only keep the
    // rows where the `name` value matches the filter value
    filteredData = filteredData.filter(row => row.weight === weight);
  };

  if (points) {
    // Apply `filter` to the table data to only keep the
    // rows where the `name` value matches the filter value
    filteredData = filteredData.filter(row => row.points === points);
  };

  if (assists) {
    // Apply `filter` to the table data to only keep the
    // rows where the `name` value matches the filter value
    filteredData = filteredData.filter(row => row.assists === assists);
  };

   // Rebuild the table using the filtered data
  // @NOTE: If no name was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
