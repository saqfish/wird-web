import React, { useContext } from "react";

import { MainContext } from "../../context";
import Button from "../Controls/Button";
import { Flex} from "theme-ui";
import { views } from "../views";

const Controls = () => {
  const { view} = useContext(MainContext);

  return (
    <Flex sx={{ justifyContent: "flex-end"}}>
      {view !== views.MUSHAF && view !== views.HOME ? (
        <Button text="Mushaf" view={views.MUSHAF} />
      ) : null}
      {view !== views.DETAIL ? (
        <Button text="Detail" view={views.DETAIL} />
      ) : null}
    </Flex>
  );
};

export default Controls;
