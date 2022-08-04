import { Routes, Route } from 'react-router-dom';

import Header from "../Header/Header";
import Particle from "../Particles/Particles";
import Encryption from "../Encryption/Encryption";
import Decryption from "../Decryption/Decryption";
import Footer from "../Footer/Footer";

import "../App/App.css";


export default function App() {

  return (
    <>
      <Header/>
      <Particle/>
      <Routes>
          <Route exact path="/" element={<Encryption />}/>
          <Route exact path="/encryption" element={<Encryption />}/>
          <Route exact path="/decryption" element={<Decryption />}/>
          <Route exact path="*" element={""}/>
      </Routes>
      <Footer />
    </>
  );
}
