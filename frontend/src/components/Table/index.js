import React from 'react';

import { TableWapper, TableContent } from './styles';

export default function Table({ children, data }) {
  console.log(data);
  return (
    <TableWapper>
      <TableContent>
        {children}
        <tbody>
          {data.map(project => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </TableContent>
    </TableWapper>
  );
}
