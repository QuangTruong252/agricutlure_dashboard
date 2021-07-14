import { createContext, useState } from "react";
import { apiUrl, AIUrl } from "./constants";
import axios from "axios";

export const AIContext = createContext();

const AIContextProvider = ({children}) => {

    //State

    //logic
    const recommentionCropsAI = async (averageGeneral) => {
        //log Average General use to predict 
        console.log(averageGeneral);
        try {
            const response = await axios.post(`${AIUrl}/predict`, averageGeneral);
            if (response.data.success) {
                return response.data;
            }
        } catch (error) {
            return error.response.data
              ? error.response.data
              : { success: false, message: "server error" };
        }
    }
    //data provider

    const AIContextData = {
        recommentionCropsAI,
    };

    //return Provider

    return (
        <AIContext.Provider value={AIContextData}>
            {children}
        </AIContext.Provider>
    );

};

export default AIContextProvider;