import { createContext, useContext, useState } from "react";

const AllContext = createContext();

const AllContextProvider = ({ children }) => {

    const [isFocused, setIsFocused] = useState(false);
    const [filter, setFilter] = useState(false);
    const [randomProducts, setRandomProducts] = useState([])
    const [selectedRatings, setSelectedRatings] = useState([])
    const [filterdProducts, setFilterdProducts] = useState([])
    const [priceFilters, setPriceFilters] = useState({
        under500: false,
        from1000to3000: false,
        from3000to5000: false,
    });

    return (
        <AllContext.Provider
            value={{
                isFocused, setIsFocused,
                filter, setFilter,
                randomProducts, setRandomProducts,
                selectedRatings, setSelectedRatings,
                filterdProducts, setFilterdProducts,
                priceFilters, setPriceFilters,
            }}
        >
            {children}
        </AllContext.Provider>
    );
};

const useAllContext = () => useContext(AllContext);

export { AllContext, AllContextProvider, useAllContext };
