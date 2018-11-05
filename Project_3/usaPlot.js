Plotly.d3.csv("./population.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; })
  }

  var frames = []
  var z = unpack(rows, 'pop')
  var locations = unpack(rows, 'abb')
  console.log(z)


  var n = 7;
  var j = 51;
  var k = 0;
  var num = 2010
  for (var i = 0; i < n; i++) {
    k++
    num++
    j = 51
    j = j*k
    frames[i] = {data: [{z: [], locations: []}], name: num}
    frames[i].data[0].z = z.slice(0, j);
    frames[i].data[0].locations = locations.slice(0, j);
  }

var data = [{
      type: 'choropleth',
      locationmode: 'USA-states',
      locations: frames[0].data[0].locations,
      z: frames[0].data[0].z,
      text: frames[0].data[0].locations,
      zauto: false,
      zmin: 500000,
      zmax: 50000000

}];

var layout = {
    title: 'USA State Population 2010 - 2040',
    geo:{
       scope: 'usa',
       countrycolor: 'rgb(255, 255, 255)',
       showland: true,
       landcolor: 'rgb(217, 217, 217)',
       showlakes: true,
       lakecolor: 'rgb(255, 255, 255)',
       subunitcolor: 'rgb(255, 255, 255)',
       lonaxis: {},
       lataxis: {}
    },
    updatemenus: [{
      x: 0.1,
      y: 0,
      yanchor: "top",
      xanchor: "right",
      showactive: false,
      direction: "left",
      type: "buttons",
      pad: {"t": 87, "r": 10},
      buttons: [{
        method: "animate",
        args: [null, {
          fromcurrent: true,
          transition: {
            duration: 200,
          },
          frame: {
            duration: 500,
            redraw: false
          }
        }],
        label: "Play"
      }, {
        method: "animate",
        args: [
          [null],
          {
            mode: "immediate",
            transition: {
              duration: 0
            },
            frame: {
              duration: 0,
              redraw: false
            }
          }
        ],
        label: "Pause"
      }]
    }],
    sliders: [{
      active: 0,
      steps: [{
        label: "2010",
        method: "animate",
        args: [["2010"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      },{
        label: "2020",
        method: "animate",
        args: [["2011"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      }, {
        label: "2030",
        method: "animate",
        args: [["2012"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      }, {
        label: "2040",
        method: "animate",
        args: [["2013"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      }, {
      //   label: "2040",
      //   method: "animate",
      //   args: [["2014"], {
      //       mode: "immediate",
      //       transition: {duration: 300},
      //       frame: {duration: 300, "redraw": false}
      //     }
      //   ]
      // }, {
      //   label: "2045",
      //   method: "animate",
      //   args: [["2015"], {
      //       mode: "immediate",
      //       transition: {duration: 300},
      //       frame: {duration: 300, "redraw": false}
      //     }
      //   ]
      // }, {
      //   label: "2050",
      //   method: "animate",
      //   args: [["2016"], {
      //       mode: "immediate",
      //       transition: {duration: 300},
      //       frame: {duration: 300, "redraw": false}
      //     }
      //   ]
      }],
      x: 0.1,
      len: 0.9,
      xanchor: "left",
      y: 0,
      yanchor: "top",
      pad: {t: 50, b: 10},
      currentvalue: {
        visible: true,
        prefix: "Year:",
        xanchor: "right",
        font: {
          size: 20,
          color: "#666"
        }
      },
      transition: {
        duration: 300,
        easing: "cubic-in-out"
      }
    }]
};

Plotly.plot(usa, data, layout).then(function() {
    Plotly.addFrames('usa', frames);
  });
})