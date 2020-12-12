import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';


// let Preloader = (props) =>{
//     return <div id="preloader">
//         <div id="loader"></div>
//     </div>
// }

let Preloader = (props) =>{
    return <div className={'preloader_wrap'}>
        <CircularProgress disableShrink />

    </div>
}
export default Preloader;