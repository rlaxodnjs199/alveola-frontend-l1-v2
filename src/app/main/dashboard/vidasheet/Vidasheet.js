import { Button } from '@mui/material';
import useQCTWorkSheet from '../qctworksheet/api/useQCTWorksheet';

const Vidasheet = () => {
  const { status, isLoading, isError, data } = useQCTWorkSheet('GALA');

  return (
    <Button
      onClick={() => {
        console.log(data);
      }}
    >
      CheckData
    </Button>
  );
};

export default Vidasheet;
