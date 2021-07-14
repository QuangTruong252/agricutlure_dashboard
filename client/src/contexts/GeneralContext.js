import {useReducer, createContext} from 'react';
import {generalReducer} from "../reducer/generalReducer";
import { apiUrl} from "./constants";
import axios from 'axios';

export const GeneralContext = createContext();


const GeneralContextProvider = ({children}) => {

    // State
    const [generalState, dispatch] = useReducer(generalReducer, {
        generals: [],
        isLoading: true,
        averages: []
    });

    // get all generals
    const getGenerals = async () => {
        try {
            const response = await axios.get(`${apiUrl}/generals`);
            // console.log(response.data.generals);
            if(response.data.success) {
                dispatch({
                    type: "GENERALS_LOADED_SUCCESS",
                    payload: response.data
                });
            }
        } catch (error) {
            console.log(error.response.data);
        }
    }

    // general data provider for children
    const generalContextData = {
        generalState,
        getGenerals
    };

    // return Provider
    return (
        <GeneralContext.Provider value={generalContextData}>
            {children}
        </GeneralContext.Provider>
    )
}

export default GeneralContextProvider;
