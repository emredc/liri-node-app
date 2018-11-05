var pisaReading = {
    x: pisareadingJSON.map(row => row.countryName),
    y: pisareadingJSON.map(row => row.averageScore),
    text: pisareadingJSON.map(row => row.countryName),
    name: "PISA READING",
    type: "bar",
    marker:{
      color: ['rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)', 'rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)',
      'rgba(255,0,0,1)',
      'rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)']
    }
  }; 

  // Combining both traces
  var pisaReadingData = [pisaReading];
  
  // Apply the group barmode to the layout
  var pisaLayout2 = {
    title: "PISA READING SCORE",
    barmode: "group",
  };
  
  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("pisaReading", pisaReadingData, pisaLayout2);