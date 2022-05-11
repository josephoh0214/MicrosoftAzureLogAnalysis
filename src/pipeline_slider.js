import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import pipeline1 from "./viz/pipeline-1.jpg"
import pipeline2 from "./viz/pipeline-2.jpg"
import pipeline3 from "./viz/pipeline-3.jpg"
import pipeline4 from "./viz/pipeline-4.jpg"
import pipeline5 from "./viz/pipeline-5.jpg"
import pipeline6 from "./viz/pipeline-6.jpg"
import pipeline7 from "./viz/pipeline-7.jpg"


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