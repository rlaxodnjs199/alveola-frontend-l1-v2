import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Tabs, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import QCTWorksheet from './qctworksheet/QCTWorksheet';
import Vidasheet from './vidasheet/Vidasheet';

const Root = styled(FusePageSimple)({
  '& .FusePageSimple-header': {},
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
});

const queryClient = new QueryClient();

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, value) => {
    setSelectedTab(value);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Root
        header={
          <div className="p-24">
            <h2>Dashboard</h2>
          </div>
        }
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
              <Tab className="h-64" label="QCTWorksheet" />
              <Tab className="h-64" label="Vidasheet" />
            </Tabs>
          </div>
        }
        content={
          <div className="p-24">
            {selectedTab === 0 && (
              <div>
                <QCTWorksheet />
              </div>
            )}
            {selectedTab === 1 && (
              <div>
                <Vidasheet />
              </div>
            )}
          </div>
        }
      />
    </QueryClientProvider>
  );
};

export default Dashboard;
