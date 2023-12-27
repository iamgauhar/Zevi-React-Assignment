import { createContext, useContext, useState } from "react";

const AllContext = createContext();

const AllContextProvider = ({ children }) => {

    const [isFocused, setIsFocused] = useState(false);

    return (
        <AllContext.Provider
            value={{
                isFocused, setIsFocused,

            }}
        >
            {children}
        </AllContext.Provider>
    );
};

const useAllContext = () => useContext(AllContext);

export { AllContext, AllContextProvider, useAllContext };
