import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    translate: 'DASHBOARD',
    type: 'group',
    icon: 'apps',
    children: [
      {
        id: 'qctworksheet',
        title: 'QCTWorksheet',
        translate: 'QCTWORKSHEET',
        type: 'item',
        icon: 'assignment',
        url: 'dashboard/qctworksheet',
      },
      {
        id: 'vidasheet',
        title: 'VidaSheet',
        translate: 'VIDASHEET',
        type: 'item',
        icon: 'assignment',
        url: 'dashboard/vidasheet',
      },
    ],
  },
  {
    id: 'report',
    title: 'Report',
    translate: 'REPORT',
    type: 'group',
    icon: 'apps',
    children: [
      {
        id: 'report1',
        title: 'Report1',
        translate: 'REPORT1',
        type: 'item',
        icon: 'assignment',
        url: 'report/report1',
      },
    ],
  },
];

export default navigationConfig;
