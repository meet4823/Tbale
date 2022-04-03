import React  from 'react';
import MaterialTable from 'material-table';
function BasicSearch() {
  return (
     <div style={{ backgroundColor: 'black' }}>
                 <MaterialTable
      title="Uploaded"
      
      columns={[
        { title: 'Song Name', field: 'name' },
        { title: 'Song Size', field: 'size' },
       
      ]}
      data={[
        { name: 'Love you Zindagi', size:'204 B' },
        { name: 'Lehra Do',size:'506B' },
      ]}        
      options={{
        search: true
      }}
      id="mm"
    />
            </div>
  
  )
}
export default BasicSearch;