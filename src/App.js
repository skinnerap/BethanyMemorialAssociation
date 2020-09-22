import React from 'react';
import Layout from './ui/Layout/Layout';
import Mission from './components/Mission/Mission';
import Photos from './containers/Photos/Photos';
import Homecoming from './components/Homecoming/Homecoming';
import ContactForm from './containers/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Layout>
      <Mission />
      <Photos />
      <Homecoming />
      <ContactForm />
      <Footer />
    </Layout>
  );
}

export default App;
