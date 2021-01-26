import React, { useState, useContext } from "react";
// import { blogData } from "../services";
import User, { titleValueContext, titleDispatchContext } from "./BlogContext";

const Blog = () => {
  const title = useContext(titleValueContext);
  const setTitle = useContext(titleDispatchContext);
  return (
    <titleValueContext>
      {(title) => <h2 onClick={() => setTitle()}>{title}</h2>}
    </titleValueContext>
  );
};

export default Blog;
