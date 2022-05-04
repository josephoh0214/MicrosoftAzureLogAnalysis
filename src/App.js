import React, { useState, useEffect } from "react";
import './App.scss';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import * as ReportPages from "./reportPages";
import Main from "./main";




function App() {
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimenion])

  return (
    <Router>
        {/* <RouterLink to="/AnalysisApproach">WHATTTT</RouterLink> */}
        <Routes>
          <Route path="/" element={<Main width={windowDimenion.winWidth} height={windowDimenion.winHeight}/>}/>
          <Route path="/Technology" element={<ReportPages.Technology width={windowDimenion.winWidth} height={windowDimenion.winHeight} />} />
          <Route path="/Research" element={<ReportPages.Research width={windowDimenion.winWidth} height={windowDimenion.winHeight} />} />
          <Route path="/QRF" element={<ReportPages.QRF width={windowDimenion.winWidth} height={windowDimenion.winHeight} />} />
          <Route path="/Personas" element={<ReportPages.Personas width={windowDimenion.winWidth} height={windowDimenion.winHeight} />} />
          <Route path="/KeyTerms" element={<ReportPages.KeyTerms width={windowDimenion.winWidth} height={windowDimenion.winHeight} />} />
          <Route path="/AnalysisApproach" element={<ReportPages.AnalysisApproach width={windowDimenion.winWidth} height={windowDimenion.winHeight} />} />
        </Routes>
    </Router>

  );
}

export default App;
