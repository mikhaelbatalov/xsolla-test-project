import React from 'react';
import data from '../data.json';
import List from './List';
import Search from './Search';

function TablePage() {

  return (

    <div className="TablePage">
      <main>
        <h1>Таблица</h1>
        <h2>Отображение списка всех проектов, по которым совершались платежи (поле project в transaction)</h2>
        <List options={data} />
        <h2>Фильтрация таблицы по введенным данным (по имени проекта, поле name в project).</h2>
        <Search options={data} />
      </main>
    </div>

  );

};

export default TablePage;