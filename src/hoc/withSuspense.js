import React from 'react';
import Redirect from "react-router-dom/es/Redirect";
import {connect} from "react-redux";
import Preloader from "../components/Common/Preloadrer/Preloader";
let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});
export const withSuspence = (Component) =>{



    return (props) =>{
        return <React.Suspense fallback={<Preloader/>}>
            <Component />
        </React.Suspense>;
    }
}