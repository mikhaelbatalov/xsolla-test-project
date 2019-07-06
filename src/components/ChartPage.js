import React from 'react';
import data from '../data.json';
import Rating from './Rating';
import Graph from './Graph';

function ChartPage() {

  return (

    <div className="ChartPage">
      <main>
        <h1>Диаграммы</h1>
        <h2>Отображение рейтинга популярности платежных систем (поле payment_method)</h2>
        <Rating options={data} />
        <h2>Отображение графика популярности платежных систем</h2>
        <Graph options={data} />
      </main>
    </div>

  );

};

export default ChartPage;