import React, { Component } from 'react';
import Table from './Table';

class Search extends Component {

  constructor(props) {

    super(props);

    const { options } = props;

    this.handleWrite = this.handleWrite.bind(this);

    this.state = {
      tableData: options,
      tableOptions: options,
      entry: '',
    };

  };

  handleWrite(event) {
    this.updateTable(event.target.value)
  };

  updateTable = (entry) => {
    var filteredData = this.state.tableData.filter((arrayItem) => arrayItem.transaction.project.name.toLowerCase().includes(entry.toLowerCase()));
    if (entry === '') {
      this.setState({
        tableOptions: this.state.tableData,
        entry: entry
      })
    } else {
      this.setState({
        tableOptions: filteredData,
        entry: entry
      })
    }
  };

  render() {
    return (
      <div className="search">
        <label htmlFor="table-filter">Filter the table:</label>
        <input type="search" id="table-filter" name="q" placeholder="Filter through table by project name..." size="35"
          aria-label="Filter through table by project name"
          defaultValue={this.state.entry} onChange={this.handleWrite} />
        <Table options={this.state.tableOptions} />
      </div>
    )
  };
};

export default Search;