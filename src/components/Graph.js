import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official'

function Graph(props) {

  const { options } = props;

  var graphData = Object.values(options.map(item => ({ name: item.transaction.payment_method.name, date: new Date(item.transaction.transfer_date)}))
  .sort(function(a,b){
    return a.date - b.date})
    .reduce(function (acc, el) {
    if(!acc[el.name])  acc[el.name] = { 
      name: el.name, 
      data: [],
      type: 'column'
    };
    var point = [];
    point.push(el.date.getTime());
    point.push(1);
    acc[el.name].data.push(point);
    return acc;
  }, {})).sort((a, b) => (a.data.length > b.data.length) ? -1 : 1);

  console.log(graphData);

  const chartOptions = {
    title: {
      text: 'Popularity of payment systems'
    },
    xAxis: {
      type: 'datetime',
      title: {
          text: 'Transfer Dates'
      }
  },
    yAxis: {
      title: {
          text: 'Count of transactions'
      }
  },
  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      enabled: true
  },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true
        },
      dataGrouping: {
        enabled: true,
        approximation: "sum",
        forced: true
      }
    }
  },
    series: graphData
  };

  return (
    <div className="Graph">
      <ul>
        <HighchartsReact highcharts={Highcharts} constructorType={'stockChart'} options={chartOptions} />
      </ul>
    </div>
  );
};

export default Graph;