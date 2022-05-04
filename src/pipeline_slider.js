import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import pipeline1 from "./viz/pipeline1.jpg"
import pipeline2 from "./viz/pipeline2.jpg"
import pipeline3 from "./viz/pipeline3.jpg"
import pipeline4 from "./viz/pipeline4.jpg"
import pipeline5 from "./viz/pipeline5.jpg"
import pipeline6 from "./viz/pipeline6.jpg"
import pipeline7 from "./viz/pipeline7.jpg"


export function PipelineSlider({width, height}) {
    return (
        <div style={{width: width, height: height}} >
            <AwesomeSlider
                media={[
                    {
                        source: pipeline1,
                    },
                    {
                        source: pipeline2,
                    },
                    {
                        source: pipeline3,
                    },
                    {
                        source: pipeline4,
                    },
                    {
                        source: pipeline5,
                    },
                    {
                        source: pipeline6,
                    },
                    {
                        source: pipeline7,
                    },
                ]}
            />
        </div>
    )
}