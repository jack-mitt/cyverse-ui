import React from 'react';
import IconBase from './IconBase';

export default React.createClass({
    render() {
        return (
            <IconBase
                { ...this.props }
                viewBox="0 0 24 24"
            >

                <g transform="translate(2.000000, 2.000000)">
                    <path d="M0,3.99116977 C0,1.78690757 1.79262289,0 3.99957633,0 L16.0021558,0 C18.2110608,0 20.0017321,1.78196604 20.0017321,3.99116977 L20.0017321,16.0888301 C20.0017321,18.2930923 18.2091093,20.0799999 16.0021558,20.0799999 L3.99957633,20.0799999 C1.79067132,20.0799999 0,18.2980339 0,16.0888301 L0,3.99116977 Z M4.05787098,12.2476211 L4.31687244,12.6565708 L4.73399215,12.4109435 L9.32228868,9.70905586 L9.56857705,9.56402523 L9.56857705,9.27820738 L9.56857705,8.78695508 L9.56857705,8.50888527 L9.33234905,8.36219122 L4.74405251,5.51292785 L4.32303653,5.25148323 L4.05787098,5.67016567 L3.49784336,6.55441982 L3.22466018,6.98576167 L3.66162331,7.24986026 L7.23794009,9.4113704 L7.24228472,8.55294565 L3.66596793,10.6653306 L3.22187996,10.9276353 L3.49784336,11.363367 L4.05787098,12.2476211 Z M10.2279325,12.8261264 L9.7279325,12.8261264 L9.7279325,13.3261264 L9.7279325,14.3774063 L9.7279325,14.8774063 L10.2279325,14.8774063 L14.590253,14.8774063 L15.090253,14.8774063 L15.090253,14.3774063 L15.090253,13.3261264 L15.090253,12.8261264 L14.590253,12.8261264 L10.2279325,12.8261264 Z"/>
                </g>
                <path d="M0 0h24v24H0z" fill="none"/>        
            </IconBase>
        )
    }
});
