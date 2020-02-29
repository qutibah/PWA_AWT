import IndexView from './views/Index';
import HomeView from './views/Home';
import DownloadView from './views/Downloads';
import PlaybackView from './views/VideoPlayback';
import OfflinePlayback from './views/OfflinePlayback';
import AboutUs from './views/AboutUs';
import ContactUs from './views/ContactUs';

// eslint-disable-next-line
export const publicRoutes = [
  {
    path: '/',
    exact: true,
    page: IndexView,
  },
  {
    path: '/home',
    exact: true,
    page: HomeView,
  },
  {
    path: '/downloads',
    exact: true,
    page: DownloadView,
  },
  {
    path: '/aboutus',
    exact: true,
    page: AboutUs,
  },
  {
    path: '/contactus',
    exact: true,
    page: ContactUs
  },
  {
    path: '/:id',
    exact: true,
    page: PlaybackView,
  },
  {
    path: '/offline/:id',
    exact: true,
    page: OfflinePlayback,
  },
];
