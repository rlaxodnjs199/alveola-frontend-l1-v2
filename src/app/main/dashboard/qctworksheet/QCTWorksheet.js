import { useState } from 'react';
import { Button, Tab, Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseLoading from '@fuse/core/FuseLoading';
import TableInstance from './components/Table';
import { useProjectList, useProjectData } from './api/useQCTWorksheet';

const Root = styled(FusePageSimple)({
  '& .FusePageSimple-header': {},
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
});

const QCTWorksheet = () => {
  const [proj, setProj] = useState(null);
  const { data: projectList, isLoading: projectListLoading } = useProjectList();
  const { data: projectData, isLoading: projectDataLoading } =
    useProjectData(proj);
  const [selectedTab, setSelectedTab] = useState(false);

  if (projectListLoading || projectDataLoading) {
    return <FuseLoading />;
  }

  const handleTabChange = (event, newvalue) => {
    setSelectedTab(newvalue);
    setProj(projectList.projects[newvalue]);
  };

  return (
    <Root
      contentToolbar={
        <div className="w-full pt-16 px-16 sm:px-24">
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons={false}
            className="w-full h-64 border-b-1"
          >
            {projectList.projects.map(project => {
              return (
                <Tab
                  className="h-64"
                  label={project}
                  key={project.toLowerCase()}
                />
              );
            })}
          </Tabs>
        </div>
      }
      content={
        <>
          {projectData && (
            <div className="p-24">
              <Button onClick={() => console.log(proj)}>Checker</Button>
              <div>
                <TableInstance projectData={projectData} />;
              </div>
            </div>
          )}
          <div>
            {selectedTab === false && (
              <div className="pt-128 text-center uppercase text-sm">
                Select a project from tabs
              </div>
            )}
          </div>
        </>
      }
    />
  );
};

export default QCTWorksheet;
