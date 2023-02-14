import { Redirect, Route } from "react-router-dom";
import useAuth from "../components/hooks/useAuth";

function PrivateRoute({ children, ...rest }) {
    const { AllContexts } = useAuth();
    const { user } = AllContexts;
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.displayName ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}


export default PrivateRoute;