import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

function Rating(props) {

  const { options } = props;

  var ratingData = Object.values(options.map(item => item.transaction.payment_method.name).reduce(function (acc, el) {
    if(!acc[el])  acc[el] = { name: el, y: 0 };
    acc[el].y = (acc[el].y || 0) + 1;
    return acc;
  }, {})).sort((a, b) => (a.y > b.y) ? -1 : 1)

  const chartOptions = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Rating of payment systems'
    },
    
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: {
        text: 'Count of transactions'
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y}'
        }
      }
    },
  
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> of total<br/>'
    },
  
    series: [
      {
        name: "Payment systems",
        colorByPoint: true,
        data: ratingData
      }
    ]
  };

  return (
    <div className="Rating">
      <ul>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </ul>
    </div>
  );
};

export default Rating;