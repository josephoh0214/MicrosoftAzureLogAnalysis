import React, { useState, useEffect } from "react";
import { Link, Element } from 'react-scroll'
import { FaCircle } from 'react-icons/fa';
import * as GeneralPages from "./generalPages";
import { ContosoSlider } from "./contoso_slider";
import { PipelineSlider } from "./pipeline_slider";
import { Search } from "./search";


const Main = ({width, height}) => {
    return (
        <>
        <div className="sideNav">
          <Link activeClass="active" className="Intro" to="Intro" spy={true} smooth={true} duration={500}> <FaCircle color="blue" size={35} /> </Link>
          <Link activeClass="active" className="Abstract" to="Abstract" spy={true} smooth={true} duration={500} ><FaCircle color="blue" size={35} /></Link>
          <Link activeClass="active" className="Introduction" to="Introduction" spy={true} smooth={true} duration={500} ><FaCircle color="blue" size={35} /></Link>
          <Link activeClass="active" className="InfoProblem" to="InfoProblem" spy={true} smooth={true} duration={500} ><FaCircle color="blue" size={35} /></Link>
          <Link activeClass="active" className="DeepInfo" to="DeepInfo" spy={true} smooth={true} duration={500} ><FaCircle color="blue" size={35} /></Link>
          <Link activeClass="active" className="ContosoSlider" to="ContosoSlider" spy={true} smooth={true} duration={500} ><FaCircle color="blue" size={35} /></Link>
          <Link activeClass="active" className="PipelineSlider" to="PipelineSlider" spy={true} smooth={true} duration={500} ><FaCircle color="blue" size={35} /></Link>
          <Link activeClass="active" className="Search" to="Search" spy={true} smooth={true} duration={500} ><FaCircle color="blue" size={35} /></Link>
        </div>
        <Element name="Intro"><GeneralPages.Intro width={width} height={height} /></Element>
        <Element name="Abstract"><GeneralPages.Abstract width={width} height={height} /></Element>
        <Element name="Introduction"><GeneralPages.Introduction width={width} height={height} /></Element>
        <Element name="InfoProblem"><GeneralPages.InfoProblem width={width} height={height} /></Element>
        <Element name="DeepInfo"><GeneralPages.DeepInfo width={width} height={height} /></Element>
        <Element name="ContosoSlider"><ContosoSlider width={width} height={height} /></Element>
        <Element name="PipelineSlider"><PipelineSlider width={width} height={height} /></Element>
        <Element name="Search"><Search width={width} height={height} /></Element>
        </>
    );
}

export default Main;