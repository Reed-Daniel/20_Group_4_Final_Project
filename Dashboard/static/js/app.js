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
  let filteredData = tableData;

   // Check to see if a name was entered and filter the
  // data using that name.
  if (names) {
    // Apply `filter` to the table data to only keep the
    // rows where the `name` value matches the filter value
    filteredData = filteredData.filter(row => row.name === names);
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

// dynamic range slider to show current value
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}