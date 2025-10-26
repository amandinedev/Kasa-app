import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/home.jsx';
import APropos from '../../pages/APropos/aPropos.jsx';
import FicheLogement from '../../pages/FicheLogement/ficheLogement.jsx';
import Error404 from '../../pages/error404/error404.jsx';
import Layout from '../Layout/layout.jsx';

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/A-propos" element={<APropos />} />
          <Route path="/Fiche-logement/:id" element={<FicheLogement />} />
          <Route path="/*" element={<Error404 />} /> {/* This will catch all undefined routes */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
