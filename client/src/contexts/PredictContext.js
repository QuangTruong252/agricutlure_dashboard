import {useState, createContext} from 'react';
import { apiUrl} from "./constants";
import axios from 'axios';

export const PredictContext = createContext();


const PredictContextProvider = ({children}) => {

    // State
    const [predict, setPredict] = useState({})

    // get predict
    const getPredict = async () => {
        try {
            const response = await axios.get(`${apiUrl}/predict`);
            if (response.data.success) {
                setPredict(response.data.predicts)
                return response.data.predicts;
            }
        } catch (error) {
            return error.response.data
              ? error.response.data
              : { success: false, message: "server error" };
        }
    }


    // general data provider for children
    const predictContextData = {
        predict,
        getPredict,
        setPredict
    };

    // return Provider
    return (
        <PredictContext.Provider value={predictContextData}>
            {children}
        </PredictContext.Provider>
    )
}

export default PredictContextProvider;
