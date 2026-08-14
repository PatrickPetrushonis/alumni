import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

// Pages
import { IndexPage } from './pages/IndexPage';
import { NewsPage } from './pages/NewsPage';
import { NewslettersPage } from './pages/NewslettersPage';
import { OfficersPageLayout } from './pages/OfficersPageLayout';
import { NotFoundPage } from './pages/NotFoundPage';

// Data
import {
  indexData,
  newsData,
  notFoundData,
  aa1OfficersData,
  aaiiOfficersData,
  newslettersData,
} from './utils/data';

import './styles/main.scss';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout pagename={indexData.pagename}>
              <IndexPage data={indexData} currentNewsletter={newslettersData.current} />
            </Layout>
          }
        />

        <Route
          path="/news"
          element={
            <Layout pagename={newsData.pagename}>
              <NewsPage data={newsData} />
            </Layout>
          }
        />

        <Route
          path="/newsletters"
          element={
            <Layout pagename={newslettersData.pagename}>
              <NewslettersPage data={newslettersData} />
            </Layout>
          }
        />

        <Route
          path="/officers"
          element={
            <Layout pagename={aa1OfficersData.pagename}>
              <OfficersPageLayout data={aa1OfficersData} />
            </Layout>
          }
        />

        <Route
          path="/aaii/officers"
          element={
            <Layout pagename={aaiiOfficersData.pagename}>
              <OfficersPageLayout data={aaiiOfficersData} />
            </Layout>
          }
        />

        <Route
          path="*"
          element={
            <Layout pagename={notFoundData.pagename}>
              <NotFoundPage data={notFoundData} />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}