import React from "react";

import Control from "./Control";
import Dates from "./Dates";
import { Flex } from "theme-ui";

const Detail = () => {
  return (
    <Flex
      sx={{
        padding: 2,
        width: "100%",
        flexDirection: "column",
        overflow: "hide",
      }}
    >
      <Control />
      <Dates />
    </Flex>
  );
};

export default Detail;
