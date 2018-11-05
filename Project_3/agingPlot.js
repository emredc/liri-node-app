var trace1 = {
    x: [2018, 2020, 2025, 2030, 2035, 2040, 2045, 2050, 2055, 2060],
    y: [15.2, 17, 17.4 , 18.3, 21.2, 21.5 ,22.4 , 22.9, 23, 23.5],
    name: 'Adults',
    color: 'blue',
    type: 'scatter'
  };
  var trace2 = {
    x: [2018, 2020, 2025, 2030, 2035, 2040, 2045, 2050, 2055, 2060],
    y: [22.8, 21.6, 21.3 , 22.1, 21.1 , 21, 20.7, 20.3, 20.1,19.8],
    name: 'Children',
    color: 'blue',
    type: 'scatter'
  };
  
  var trace3 = {
    x: [2018, 2020, 2025, 2030, 2035, 2040, 2045, 2050, 2055, 2060],
    y: [49.2, , , , 78.0, , , , ,94.7],
    name: 'Adults',
    type: 'bar'
  };

  var trace4 = {
    x: [2018, 2020, 2025, 2030, 2035, 2040, 2045, 2050, 2055, 2060],
    y: [73.6, , , , 76.4, , , , ,79.8],
    name: 'Children',
    type: 'bar'
  };
  
  var data = [trace1,trace2,trace3,trace4];

//   var agingLayout = {
//     title: "National Population Projection"
//   };
var layout = {
    showlegend: false,
    height: 600,
    width: 600,
    // xaxis: {
    //   showline: true,
    //   showgrid: false,
    //   showticklabels: true,
    //   linecolor: 'rgb(204,204,204)',
    //   linewidth: 5,
    //   autotick: false,
    //   ticks: 'outside',
    //   tickcolor: 'rgb(204,204,204)',
    //   tickwidth: 2,
    //   ticklen: 5,
    //   tickfont: {
    //     family: 'Arial',
    //     size: 10,
    //     color: 'rgb(82, 82, 82)'
    //   }
    // },
    // yaxis: {
    //   showgrid: false,
    //   zeroline: false,
    //   showline: false,
    //   showticklabels: false
    // },
    autosize: false,
    margin: {
      autoexpand: false,
      l: 100,
      r: 20,
      t: 100
    },
    annotations: [
      {
        xref: 'paper',
        yref: 'paper',
        x: 0.5,
        y: 1,
        xanchor: 'center',
        yanchor: 'top',
        text: 'Aging Nation',
        font:{
          family: 'Arial',
          size: 25,
          color: 'rgb(37,37,37)'
        },
        showarrow: false
      },
      {
        xref: 'paper',
        yref: 'paper',
        x: 0.5,
        y: -0.1,
        xanchor: 'center',
        yanchor: 'top',
        text: 'Source: U.S. Census Bureau',
        showarrow: false,
        font: {
          family: 'Arial',
          size: 12,
          color: 'rgb(150,150,150)'
        }
      }
    ]
  };
  Plotly.newPlot('aging', data,layout);