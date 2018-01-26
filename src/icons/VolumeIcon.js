import React from 'react';
import { SvgIcon } from 'material-ui';

const VolumeIcon = ({ size = 24, ...rest }) => {
    return (
        <SvgIcon { ...rest }
            style={{
                height: size,
                width: size,
            }}
        >
            <path transform="translate(3, 4)" d="M16.6884456,4.40606062 L16.6884456,8.12043011 L16.5888256,8.46451613 C16.5888256,8.51612903 15.692245,10.3225806 8.96789092,10.3225806 C2.34315687,10.3225806 1.3967663,8.56774194 1.34695626,8.46451613 L1.34695626,4.4132812 C2.36706914,5.13649264 4.51862698,5.93548387 9.01770095,5.93548387 C13.5317532,5.93548387 15.6826326,5.13116379 16.6884456,4.40606062 Z M16.6884456,2.64946237 L16.5888256,2.99354839 C16.5888256,2.99354839 15.7918651,4.8516129 8.96789092,4.8516129 C2.34315687,4.8516129 1.3967663,3.09677419 1.34695626,2.99354839 L1.34695626,2.58064516 C1.34695626,1.39354839 4.78384836,0.412903226 9.01770095,0.412903226 C13.2515535,0.412903226 16.6884456,1.39354839 16.6884456,2.58064516 L16.6884456,2.64946237 Z M16.6884456,9.84444362 L16.6884456,13.6774194 C16.6884456,14.8645161 13.2515535,15.8451613 9.01770095,15.8451613 C4.78384836,15.8451613 1.34695626,14.8645161 1.34695626,13.6774194 L1.34695626,9.88424895 C2.36706914,10.6074604 4.51862698,11.4064516 9.01770095,11.4064516 C13.5317532,11.4064516 15.6826326,10.5842578 16.6884456,9.84444362 Z" id="path-1"></path>
        </SvgIcon>
    )
};

export default VolumeIcon
