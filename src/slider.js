import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

import act_top_opertions from "./viz/act_top_operations.png"
import act_status from "./viz/act_status.png"
import act_failed_oper from "./viz/act_failed_oper.png"
import { FOCUSABLE_SELECTOR } from '@testing-library/user-event/dist/utils';

export function Slider() {
    const images = [
        {url: act_top_opertions},
        {url: act_status},
    ];

    return (
        <div>
            <img src={act_top_opertions}></img>
            <SimpleImageSlider
                width={1500}
                height={1804}
                images={images}
                showBullets={true}
                showNavs={true}
            />
        </div>
    )
}