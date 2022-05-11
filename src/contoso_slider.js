import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import contoso1 from "./viz/contoso-1.jpg"
import contoso2 from "./viz/contoso-2.jpg"
import contoso3 from "./viz/contoso-3.jpg"
import contoso4 from "./viz/contoso-4.jpg"
import contoso5 from "./viz/contoso-5.jpg"


export function ContosoSlider({width, height}) {
    return (
        <div style={{width: width, height: height}} id="contososlider">
            <AwesomeSlider
                media={[
                    {
                        source: contoso1,
                    },
                    {
                        source: contoso2,
                    },
                    {
                        source: contoso3,
                    },
                    {
                        source: contoso4,
                    },
                    {
                        source: contoso5,
                    },
                ]}
            />
        </div>
    )
}