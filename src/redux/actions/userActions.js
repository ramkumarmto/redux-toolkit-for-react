export const userAction = () => {
  return async (dispatch) => {
    // loading
    dispatch({
      type: "userRequest",
    });

    //api call
    const fetchUser = async () => {
      const response = await fetch("https://dummyjson.com/users");
      if (!response.ok) {
        throw new Error("Response is not ok.");
      }
      return response.json();
    };

    try{
        const data = await fetchUser();
        dispatch({
            type: "userSuccess",
            payload : data.users
        })

    }catch(err){
        dispatch({
            type: "userFailure",
            message : "fetching error"
        })
    }

  };
};
