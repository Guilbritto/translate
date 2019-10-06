import styled from 'styled-components';

export const TableWapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const TableContent = styled.table`
  width: 100%;
  max-height: 90%;

  thead {
    th {
      align-items: left;
    }
  }
  tbody {
    tr {
      border-radius: 6px;

      &:hover {
        box-shadow: 0px 0px 4px #999;
      }
      & + tr {
        border-top: 1px solid red;
      }
    }
    td {
      border-bottom: 1px solid #999;
      color: #666;
      font-size: 16px;
      padding: 10px;
    }
  }
`;
