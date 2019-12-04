let chartOptions={
    responsive: true,
    legend: {display: false},
    maintainAspectRatio: false,
    elements: {
        line: {
          fill: false
        }
    },
    scales: {
        xAxes: [{
            gridLines:{ drawBorder:false},
            barPercentage: 0.4,
            ticks: {
                autoSkip: false,
                maxRotation: 15,
                minRotation: 45,
                fontSize: 13,
                fontStyle: 'bold'    
            }
        }],
        yAxes: [{
            gridLines:{ drawBorder: false},
            ticks:{
                min:0,
                max:50,
                stepSize:50
            },
        }],
    },
    animation:{
        duration: 2000
    },
    // annotation: {
    //     annotations: [{
    //             // drawTime: "afterDatasetsDraw",
    //             // id: "hline",
    //             drawTime: 'afterDraw',
    //             type: "line",
    //             mode: "horizontal",
    //             scaleID: "y-axis-0",
    //             value: 10,
    //             borderColor: "#747474",
    //             borderWidth: 0,
    //             label: {
    //                 backgroundColor: "#747474",
    //                 content: "Threshold",
    //                 enabled: true,
    //                 position: 'right',
    //                 xAdjust: 0,
    //             }
    //     }]
    // }
  }

export default chartOptions;