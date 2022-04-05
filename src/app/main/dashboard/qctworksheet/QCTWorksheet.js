import TableInstance from './components/Table';
import useQCTWorkSheet from '../api/useQCTWorksheet';

const QCTWorksheet = () => {
  const { data, isLoading } = useQCTWorkSheet('GALA');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <TableInstance tableData={data} />;
};

export default QCTWorksheet;
