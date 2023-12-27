import { createContext, useContext, useState } from "react";

const AllContext = createContext();

const AllContextProvider = ({ children }) => {

    const [isFocused, setIsFocused] = useState(false);
    const [filter, setFilter] = useState(false);
    const [randomProducts, setRandomProducts] = useState([])

    return (
        <AllContext.Provider
            value={{
                isFocused, setIsFocused,
                filter, setFilter,
                randomProducts, setRandomProducts,
            }}
        >
            {children}
        </AllContext.Provider>
    );
};

const useAllContext = () => useContext(AllContext);

export { AllContext, AllContextProvider, useAllContext };
