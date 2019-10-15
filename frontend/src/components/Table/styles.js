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
    td {
      width: 100%;
      color: #666;
      font-size: 16px;
      padding: 10px;
      border-top: 1px solid #eee;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      svg {
        padding: 5px;
        box-shadow: 0px 0px 2px #999;
        margin: 0 5px;
        border-radius: 4px;
        &:hover {
          cursor: pointer;
          box-shadow: 0px 0px 4px #999;
        }
      }

      &:hover {
        box-shadow: 0px 0px 2px #999;
      }
    }
  }
`;
