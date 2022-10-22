import * as api from "../api";

// Need to create Action Creators
// Integrate redux thunk to support async operations
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllPosts();
    const action = { type: "FETCH_ALL", payload: [data] };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
