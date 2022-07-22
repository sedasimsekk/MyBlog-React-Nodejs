import * as types from "./types";
import * as api from "../api/index";

export const fechPosts =async (dispatch) => {
    try {
        const {data} =await api.fetchPost();
        dispatch({
            type:types.FETCH_POSTS,
            payload :data,
        })
    } catch (error) {
        console.log(error);
    }
};

export const createPost =(post) => async (dispatch) => {
    try {
        const {data} =await api.createPost(post);
        dispatch({
            type:types.CREATE_POST,
            payload :data,
        })
    } catch (error) {
        console.log(error);
    }
};

