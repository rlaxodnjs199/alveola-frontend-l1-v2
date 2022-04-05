import { useQuery } from 'react-query';
import axios from 'axios';

async function getQCTWorkSheetByProject(project) {
  const { data } = await axios.get(
    `http://localhost:8000/gapi/QCT-worksheet/${project}`,
  );
  return data;
}

export default function useQCTWorkSheet(project) {
  return useQuery(['qctworksheet', project], () =>
    getQCTWorkSheetByProject(project),
  );
}
