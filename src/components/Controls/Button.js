import React, { useContext } from "react";
import { Button } from "theme-ui";
import { MainContext } from "../../context";

export default ({ text, view, func }) => {
  const { setView } = useContext(MainContext);
  const handler = () => {
    if (!view && view !== 0) return func();
    return setView(view);
  };
  return (
    <Button m={2} onClick={handler}>
      {text}
    </Button>
  );
};
