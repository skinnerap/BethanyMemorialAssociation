import React from 'react';
import Layout from './ui/Layout/Layout';
import HomePage from './components/HomePage/HomePage';
import PhotoSubmission from './containers/PhotoSubmission/PhotoSubmission';
import AdminView from './components/AdminView/AdminView';
import PublicPhotos from './components/PublicPhotos/PublicPhotos';
import Graves from './components/Graves/Graves';
import { Route } from 'react-router-dom';

function App() {
  return (
    <Layout>    
      <Route 
        path='/'
        exact
        component={HomePage}
      />
      <Route
        path='/submission'
        exact
        component={PhotoSubmission}
      />
      <Route
        path='/admin'
        exact
        component={AdminView}
      />
      <Route
        path='/photos'
        exact
        component={PublicPhotos}
      />
      <Route
        path='/graves'
        exact
        component={Graves}
      />
    </Layout>
  );
}

export default App;
