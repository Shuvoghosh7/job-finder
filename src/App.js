import React from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from './component/Layout';
import Jobs from './component/Jobs/Jobs';
import AddJob from './pages/AddJob';
import EditJob from './pages/EditJob';


function App() {
  return (
   
      <Layout>
        <Routes>
          <Route path="/" element={<Jobs />} />
          <Route path="/add-job" element={<AddJob />} />
          <Route path="/edit-job" element={<EditJob />} />
        </Routes>
      </Layout>
 

  );
}

export default App;
