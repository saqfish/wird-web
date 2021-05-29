import React, { useContext } from "react";

import { MainContext } from "../../context";
import Button from "../Controls/Button";
import { Flex, MenuButton } from "theme-ui";
import { views } from "../views";

const Controls = () => {
  const { view, open, setOpen } = useContext(MainContext);

  return (
    <Flex sx={{ margin:"0 0 0 0.5rem", justifyContent: "flex-end" }}>
      {!open ? (
        <MenuButton
          sx={{ height: "100%", flex: 1, justifyContent: "flex-start" }}
          onClick={() => setOpen(true)}
        />
      ) : null}
      {view !== views.MUSHAF && view !== views.HOME ? (
        <Button text="Mushaf" view={views.MUSHAF} />
      ) : null}
      {view !== views.STATS ? <Button text="Stats" view={views.STATS} /> : null}
    </Flex>
  );
};

export default Controls;
