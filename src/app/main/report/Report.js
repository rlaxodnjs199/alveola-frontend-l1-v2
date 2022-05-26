import { useRef } from 'react';
import { styled } from '@mui/material/styles';
import { Hidden, Icon, IconButton } from '@mui/material';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseLoading from '@fuse/core/FuseLoading';
import PatientInfo from './components/PatientInfo';

const Root = styled(FusePageSimple)({
  '& .FusePageSimple-header': {},
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
});

const Report = () => {
  const pageLayout = useRef(null);

  return (
    <Root
      header={
        <div className="flex flex-col flex-1">
          <div className="flex items-center p-24 px-12">
            <Hidden lgUp>
              <IconButton
                onClick={ev => pageLayout.current.toggleLeftSidebar()}
                aria-label="open left sidebar"
                size="large"
              >
                <Icon>menu</Icon>
              </IconButton>
            </Hidden>
            <div className="flex-1 lg:px-12">
              <h4>Report</h4>
            </div>
          </div>
        </div>
      }
      contentToolbar={
        <div className="px-24">
          <h4>SUBJ1</h4>
        </div>
      }
      content={
        <div className="p-24">
          <PatientInfo />
        </div>
      }
      leftSidebarHeader={
        <div className="p-24">
          <h4>Patient List</h4>
        </div>
      }
      leftSidebarContent={
        <div className="p-24">
          <h4>SUBJ1</h4>
        </div>
      }
      sidebarInner
      ref={pageLayout}
    />
  );
};

export default Report;
