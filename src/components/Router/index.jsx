import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/';
import APropos from '../../pages/APropos/index.jsx';
import FicheLogement from '../../pages/FicheLogement/index.jsx';
import Error404 from '../../pages/error404/index.jsx';
import Layout from '../../components/Layout/';

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/A-propos" element={<APropos />} />
          <Route path="/Fiche-logement/:id" element={<FicheLogement />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
