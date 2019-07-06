import React from 'react';

function List(props) {

  const { options } = props;

  const projectIdData = options.map(function (arrayItem) {
    return (
      arrayItem.transaction.project.id
    )
  });

  const listProjectData = options.filter(function (arrayItem, index, array) {
    return (
      projectIdData.indexOf(arrayItem.transaction.project.id) === index
    )
  });

  const ul = listProjectData.map(function (arrayItem) {
    return (
      <li key={(arrayItem.transaction.project.id).toString()} >{arrayItem.transaction.project.name}</li>
    )
  });

  return (
    <div className="List">
      <ul>
        {ul}
      </ul>
    </div>
  );
};

export default List;