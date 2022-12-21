import { createContext } from "react";
import useCart from "../hooks/useCart";
import useFirebase from "../hooks/useFirebase";
import useItems from "../hooks/useItems";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const AllContexts = useFirebase();
    const { items } = useItems();
    const { addToCart, selectedItem } = useCart();
    const data = { AllContexts, items, addToCart, selectedItem };
    return (<AuthContext.Provider value={data}>
        {children}
    </AuthContext.Provider>);
};

export default AuthProvider;