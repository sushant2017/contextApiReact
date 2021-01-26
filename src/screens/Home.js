import React, { useEffect, useReducer, useContext } from "react";
import { SET_DATA } from "../actions/actions";
import { setPostData } from "../actions/Home";
// import { connect } from "react-redux";
import HomeReducer, { initialState } from "../reducers/HomeReducer";
import { UserInformation, UserUpdateInformation } from "./User";
import { getPostData } from "../services";
function Home(props) {
  const [state, dispatch] = useReducer(HomeReducer, initialState);
  const userContext = useContext(UserInformation);
  const userDispatchContext = useContext(UserUpdateInformation);

  useEffect(() => {
    getPostData()
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: SET_DATA, data: res });
      });
  }, []);

  return (
    // <UserInformation.Consumer>
    //   {(user) => (
    <div>
      <h1
        onClick={() => {
          userDispatchContext({
            name: "Ketan",
            token: "asdasdasdasdad",
          });
        }}
      >
        Welcome {userContext.name}
      </h1>
      {state.posts.map((post, index) => {
        return <p key={index}>{post.title}</p>;
      })}
    </div>
    //   )}
    // </UserInformation.Consumer>
  );
}

export default Home;
