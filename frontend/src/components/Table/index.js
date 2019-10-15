import React from 'react';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { TableWapper, TableContent } from './styles';

export default function Table({ children, data }) {
  return (
    <TableWapper>
      <TableContent>
        {children}
        <tbody>
          {data.map(project => (
            <tr key={project.id}>
              <td>
                <div>{project.name}</div>
                <div>
                  <MdDelete size={30} />
                  <MdModeEdit size={30} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </TableContent>
    </TableWapper>
  );
}
