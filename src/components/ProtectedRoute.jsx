import {Route, Redirect} from "react-router-dom";

const ProtectedRoute = ({path, component: Component, render, auth,redirect, ...rest}) => {
    return (
        <Route {...rest} render={props => {
            if (auth ===null) return <Redirect to={{
                pathname: redirect,
                state: {from: props.location}
            }}/>;
            return Component ? <Component {...props} {...rest} /> : render(props);
        }}/>
    );
};

export default ProtectedRoute;