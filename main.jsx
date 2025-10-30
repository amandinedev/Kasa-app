// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import Router from './src/components/Router/router';


const root = document.getElementById("root");

function Main() {
  return (
    <>
      <Router/>
    </>
  );
}

export default Main;

createRoot(root).render(
    <Main/>
)

