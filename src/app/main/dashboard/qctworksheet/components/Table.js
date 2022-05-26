import { useState, useMemo } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import AddTaskIcon from '@mui/icons-material/AddTask';
import {
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
} from 'react-table';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';
import CollapsibleRow from './CollapsibleRow';

const TableInstance = ({ projectData }) => {
  const [columns, data] = useMemo(() => {
    return [projectData.columns, projectData.rows];
  }, [projectData]);

  const [rowOpen, setRowOpen] = useState(false);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageOptions,
    gotoPage,
    setPageSize,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize, selectedRowIds, globalFilter },
  } = useTable(
    {
      columns,
      data,
    },
    usePagination,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(tableColumns => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <Checkbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...tableColumns,
      ]);
    },
  );

  const handleChangePage = (event, newPage) => {
    gotoPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setPageSize(Number(event.target.value));
  };

  return (
    <>
      <TableContainer>
        {/* <TableToolbar
          numSelected={Object.keys(selectedRowIds).length}
          deleteUserHandler={deleteUserHandler}
          addUserHandler={addUserHandler}
          preGlobalFilteredRows={preGlobalFilteredRows}
          setGlobalFilter={setGlobalFilter}
          globalFilter={globalFilter}
        /> */}
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map(headerGroup => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                <TableCell />
                {headerGroup.headers.map(column => (
                  <TableCell
                    className="text-center"
                    {...column.getHeaderProps()}
                    // {...(column.id === 'selection'
                    //   ? column.getHeaderProps()
                    //   : column.getHeaderProps(column.getSortByToggleProps()))}
                  >
                    {column.render('Header')}
                    {/* {column.id !== 'selection' ? (
                      <TableSortLabel
                        active={column.isSorted}
                        // react-table has a unsorted state which is not treated here
                        direction={column.isSortedDesc ? 'desc' : 'asc'}
                      />
                    ) : null} */}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return <CollapsibleRow row={row} key={index} />;
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[
                  5,
                  10,
                  25,
                  { label: 'All', value: data.length },
                ]}
                colSpan={6}
                count={data.length}
                rowsPerPage={pageSize}
                page={pageIndex}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <div className="flex py-24">
        <Button
          variant="outlined"
          className="bg-orange-300 hover:bg-orange-800 mr-20 rounded-md"
        >
          <BuildIcon className="mr-10" />
          <Typography variant="h6">De-Identification</Typography>
        </Button>
        <Button
          variant="outlined"
          className="bg-lime-300 hover:bg-lime-800 mr-20 rounded-md"
        >
          <BuildIcon className="mr-10" />
          <Typography variant="h6">Image Registration</Typography>
        </Button>{' '}
        <Button
          variant="outlined"
          className="bg-teal-300 hover:bg-teal-800 mr-20 rounded-md"
        >
          <BuildIcon className="mr-10" />
          <Typography variant="h6">1D CFD</Typography>
        </Button>{' '}
        <Button
          variant="outlined"
          className="bg-yellow-300 hover:bg-yellow-800 rounded-md"
        >
          <BuildIcon className="mr-10" />
          <Typography variant="h6">3D CFD</Typography>
        </Button>
      </div>
    </>
  );
};

export default TableInstance;
