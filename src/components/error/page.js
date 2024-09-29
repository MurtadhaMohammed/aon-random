import React from "react";

const Error = () => {
  React.useEffect(() => {
    console.log("Error");

    return () => {
      console.log("Error unmount");
    };
  }, []);
  return <div>Oops! Something went wrong</div>;
};

export default Error;
