import React from "react";

import Control from "./Control";
import Dates from "./Dates";
import { Flex } from "theme-ui";

const Detail = () => {
  return (
    <Flex
      p={1}
      sx={{
        width: "100%",
        flexDirection: "column",
        overflow: "auto",
        fontSize: "1.2rem",
      }}
    >
      <Control />
      <Dates />
    </Flex>
  );
};

export default Detail;
