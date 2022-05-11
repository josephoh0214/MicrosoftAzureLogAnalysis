import React, { useState, useEffect } from "react";
import { Link, Element } from 'react-scroll'
import { FaCircle } from 'react-icons/fa';
import * as GeneralPages from "./generalPages";
import { ContosoSlider } from "./contoso_slider";
import { PipelineSlider } from "./pipeline_slider";
import { Search } from "./search";
import { click } from "@testing-library/user-event/dist/click";


const Main = ({ width, height }) => {
  const [clicked, setClicked] = useState("Intro");
  const slides = ["Intro", "AboutUs", "Solution", "ProjectStatus", "Abstract", "Introduction", "InfoProblem", "DeepInfo", "ContosoSlider", "PipelineSlider", "Search", "PrjDiff"]
  const clickFunc = (name) => {
    setClicked(name);
  }
  return (
    <>
      <div className="sideNav">
        {slides.map( ( slideName ) => {
          return (
            <Link activeClass="active" className={slideName} to={slideName} spy={true} smooth={true} duration={500}> <FaCircle name={slideName} color={ clicked === slideName ? "#CC8F8F" : "#808080" } size={35} onClick={() => clickFunc(slideName)}/> </Link>
          )
        })}
      </div>
      <Element name="Intro"><GeneralPages.Intro width={width} height={height} /></Element>
      <Element name="AboutUs"><GeneralPages.AboutUs width={width} height={height} /></Element>
      <Element name="Solution"><GeneralPages.Solution width={width} height={height} /></Element>
      <Element name="ProjectStatus"><GeneralPages.ProjectStatus width={width} height={height} /></Element>
      <Element name="Abstract"><GeneralPages.Abstract width={width} height={height} /></Element>
      <Element name="Introduction"><GeneralPages.Introduction width={width} height={height} /></Element>
      <Element name="InfoProblem"><GeneralPages.InfoProblem width={width} height={height} /></Element>
      <Element name="DeepInfo"><GeneralPages.DeepInfo width={width} height={height} /></Element>
      <Element name="ContosoSlider"><ContosoSlider width={width} height={height} /></Element>
      <Element name="PipelineSlider"><PipelineSlider width={width} height={height} /></Element>
      <Element name="Search"><Search width={width} height={height} /></Element>
      <Element name="PrjDiff"><GeneralPages.PrjDiff width={width} height={height} /></Element>
    </>
  );
}

export default Main;