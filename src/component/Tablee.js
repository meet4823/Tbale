import React,{forwardRef }from 'react';
import MaterialTable from 'material-table';
import Clear from '@material-ui/icons/Clear';
const tableIcons = {
   
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />)
  };
function CustomFilteringAlgorithm() {
    
    return (
        
      <MaterialTable
      icons={tableIcons}
        columns={[
          {
            title: 'Name', 
            field: 'name',
            customFilterAndSearch: (term, rowData) => term == rowData.name.length
          },
          { title: 'Surname', field: 'surname' },
          { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
          {
            title: 'Birth Place',
            field: 'birthCity',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
          },
        ]}
        data={[
          { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
          { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
        ]}
        options={{
          filtering: true
        }}
      />
    )
  }
  

export default CustomFilteringAlgorithm;
