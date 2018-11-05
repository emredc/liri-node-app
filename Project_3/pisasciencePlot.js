var pisaScience = {
    x: pisascienceJSON.map(row => row.countryName),
    y: pisascienceJSON.map(row => row.averageScore),
    text: pisascienceJSON.map(row => row.countryName),
    name: "PISA SCIENCE",
    type: "bar",
    marker:{
      color: ['rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)', 'rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)',
      'rgba(255,0,0,1)',
      'rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)','rgba(169, 169, 169, 1)']
    }
  }; 

  // Combining both traces
  var pisaScienceData = [pisaScience];
  
  // Apply the group barmode to the layout
  var pisaLayout = {
    title: "PISA SCIENCE SCORE",
    barmode: "group",
  };
  
  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("pisaScience", pisaScienceData, pisaLayout);