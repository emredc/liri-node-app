var data = [{
    values: [807300, 773800, 607500, 194300, 1227000, 1100000, 746.000],
    labels: ['Management', 'Business', 'Computer-Math', 'Engineering', 'Service', 'Healthcare', 'Construction' ],
    domain: {column: 0},
    name: 'Number of Jobs Needed',
    hoverinfo: 'label+percent+name',
    hole: .3,
    type: 'pie'
  },{
    values: [33.8, 30.7, 29.7, 28.5, 27.4],
    labels: ['Statisticians', 'S. Developers', 'Mathematicians', 'InfoSec', 'Operation Research'],
    text: 'Computer/Math/Engineer Occupations',
    textposition: 'inside',
    domain: {column: 1},
    name: '',
    hoverinfo: 'label+percent+name',
    hole: .3,
    type: 'pie'
  }];
  
  var layout = {
    title: '',
    annotations: [
      {
        font: {
          size: 20
        },
        showarrow: false,
        text: '2016',
        x: 0.3,
        y: 0.1,
        xanchor: 'right',
        yanchor: 'top'
      },
      {
        font: {
          size: 20
        },
        showarrow: false,
        text: '2026 Job Projection',
        x: 0.6,
        y: 0.1,
        xanchor: 'left',
        yanchor: 'top',
        
      },
      {
        xref: 'paper',
        yref: 'paper',
        x: 0.5,
        y: 1,
        xanchor: 'center',
        yanchor: 'top',
        text: '2016-2026 Employment Projections',
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
        text: 'Source: Bureau of Labor Statistics',
        showarrow: false,
        font: {
          family: 'Arial',
          size: 12,
          color: 'rgb(150,150,150)'
        }
      }
    ],
    height: 600,
    width: 600,
    showlegend: false,
    grid: {rows: 1, columns: 2}
  };
  
  Plotly.newPlot('donut', data, layout);