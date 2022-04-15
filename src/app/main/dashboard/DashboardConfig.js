import QCTWorksheet from './qctworksheet/QCTWorksheet';

const DashboardConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'dashboard/qctworksheet',
      element: <QCTWorksheet />,
    },
    {
      path: 'dashboard/qctworksheet',
      element: <QCTWorksheet />,
    },
  ],
};

export default DashboardConfig;
