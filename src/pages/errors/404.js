import React from "react";
export default function PageNotFound(props) {
  let goToHome = props => {
      console.log(props);
    props.history.push("/public");
  };
  return (
    <>
      <div>Page not found</div>
      <br></br>
      <button
        onClick={() => {
          goToHome(props);
        }}
      >
        home
      </button>
    </>
  );
}
