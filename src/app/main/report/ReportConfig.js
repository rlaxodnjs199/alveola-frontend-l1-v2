import Report from './Report';

const ReportConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'report/report1',
      element: <Report />,
    },
  ],
};

export default ReportConfig;
