import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./Reducer";


let API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
    isLoading: true,
    query: "HTML",
    nbPages: 0,
    page: 0,
    hits: [],
};

// create context
const AppContext = React.createContext();

// provider function
const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchApiData = async (url) => {

        dispatch({ type: "SET_LOADING" });

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            dispatch({
                type: "GET_STORIES",
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages,
                }
            });
        } catch (error) {
            console.log("error");
        }
    }

    const removePost = (postId) => {
        dispatch({ type: "REMOVE_POST", payload: postId })
    }

    const searchPost = (searchQuery) => {
        dispatch({
            type: "SEARCH_QUERY",
            payload: searchQuery,
        });
    }

    const getNextPage = () => {
        dispatch ({
            type: "NEXT_PAGE",
        });
    }

    const getPreviousPage = () => {
        dispatch ({
            type: "PREV_PAGE",
        });
    }

    useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);     // `
    }, [state.query, state.page]);

    return (
        <AppContext.Provider value={{ ...state, removePost, searchPost, getPreviousPage, getNextPage }}>
            {children}
        </AppContext.Provider>
    );
}


const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };

