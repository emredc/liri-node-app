var xData = [
    [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2013, 2014, 2015, 2016],
    [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2013, 2014, 2015, 2016],
    [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2013, 2014, 2015, 2016],
    [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2013, 2014, 2015, 2016]
  ];
  
  var yData = [
    [84.1, 84.1, 84.1, 84.6, 85.2, 85.2, 85.5, 85.7, 86.6, 86.7, 87.1, 87.6, 87.6, 88.2, 88.3, 88.4, 89.1],
    [41.9, 42.1, 43.6, 42.5, 44.2, 44.6, 41.3, 43.1, 40.9, 42.4, 41.4, 42.3, 37.5, 42.1, 43.7, 44, 46],
    [21.4, 19.6, 21.6, 21.5, 22.4, 24, 24.7, 24.1, 27.7, 27.7, 26.7, 25.9, 28.8, 23.8, 24.6, 25.2, 23.7],
    [10.9, 10.7, 10.5, 9.9, 10.3, 9.4, 9.3, 8.7, 8.0, 8.1, 7.4, 7.1, 6.6, 6.8, 6.5, 5.9, 6.1]
  ];
  
  var colors = ['rgba(255,128,0,1)', 'rgba(0,153,0,1)', 'rgba(153,0,153, 1)',
    'rgba(255,0,127,1)'
  ];
  
  var lineSize = [4, 4, 4, 4];
  
  var labels = ['H.School GradRate', '4-Year Enrollment', '2-Year Enrollment', 'College Dropout'];
  
  var data = [];
  
  for ( var i = 0 ; i < xData.length ; i++ ) {
    var result = {
      x: xData[i],
      y: yData[i],
      type: 'scatter',
      mode: 'lines',
      line: {
        color: colors[i],
        width: lineSize[i]
      }
    };
    var result2 = {
      x: [xData[i][0], xData[i][11]],
      y: [yData[i][0], yData[i][11]],
      type: 'scatter',
      mode: 'markers',
      marker: {
        color: colors[i],
        size: 10
      }
    };
    data.push(result);
  }
  
  var layout = {
    showlegend: false,
    height: 600,
    width: 600,
    xaxis: {
      showline: true,
      showgrid: false,
      showticklabels: true,
      linecolor: 'rgb(204,204,204)',
      linewidth: 5,
      autotick: false,
      ticks: 'outside',
      tickcolor: 'rgb(204,204,204)',
      tickwidth: 2,
      ticklen: 5,
      tickfont: {
        family: 'Arial',
        size: 10,
        color: 'rgb(82, 82, 82)'
      }
    },
    yaxis: {
      showgrid: false,
      zeroline: false,
      showline: false,
      showticklabels: false
    },
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
        x: 0.0,
        y: 1.05,
        xanchor: 'left',
        yanchor: 'bottom',
        text: 'From High School to College Enrollment',
        font:{
          family: 'Arial',
          size: 20,
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
        text: 'Source: National Center for Education Statistics',
        showarrow: false,
        font: {
          family: 'Arial',
          size: 12,
          color: 'rgb(150,150,150)'
        }
      }
    ]
  };
  
  for( var i = 0 ; i < xData.length ; i++ ) {
    var result = {
      xref: 'paper',
      x: 0.05,
      y: yData[i][0],
      xanchor: 'right',
      yanchor: 'middle',
      text: labels[i] + ' ' + yData[i][0] +'%',
      showarrow: false,
      font: {
        family: 'Arial',
        size: 9,
        color: 'rgb(0, 0, 153)'
      }
    };
    var result2 = {
      xref: 'paper',
      x: 0.95,
      y: yData[i][11],
      xanchor: 'left',
      yanchor: 'middle',
      text: yData[i][11] +'%',
      font: {
        family: 'Arial',
        size: 10,
        color: 'black'
      },
      showarrow: false
    };
  
    layout.annotations.push(result, result2);
  }
  
  Plotly.newPlot('highschool', data, layout);