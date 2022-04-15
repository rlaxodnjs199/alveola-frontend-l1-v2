import { useQuery } from 'react-query';
import axios from 'axios';

async function getQCTWorkSheetProjectList() {
  const { data } = await axios.get('http://localhost:8000/gapi/projects');
  return data;
}

async function getQCTWorkSheetProjectData(project) {
  const { data } = await axios.get(
    `http://localhost:8000/gapi/projects/${project}`,
  );
  return data;
}

export const useProjectList = () => {
  return useQuery(['projectList'], () => getQCTWorkSheetProjectList());
};

export const useProjectData = project => {
  return useQuery(
    ['qctworksheet', project],
    () => getQCTWorkSheetProjectData(project),
    { enabled: !!project },
  );
};
