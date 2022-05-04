import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import contoso1 from "./viz/contoso1.jpg"
import contoso2 from "./viz/contoso2.jpg"
import contoso3 from "./viz/contoso3.jpg"
import contoso4 from "./viz/contoso4.jpg"
import contoso5 from "./viz/contoso5.jpg"


export function ContosoSlider({width, height}) {
    return (
        <div style={{width: width, height: height}}>
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