import React, { useContext } from "react";
import { Flex } from "theme-ui";

import Canvas from "./Canvas";
import { MainContext } from "../../context";
import { generatePages } from "../../lib/common";

const Mushaf = () => {
  const { maqra, offset } = useContext(MainContext);
  const pages = generatePages(maqra, offset);

  return (
    <Flex
      sx={{
        flexDirection: "column",
        overflow: "auto",
        height: "100%",
        minWidth: 576,
      }}
    >
      {pages.map((p, id) => (
        <Canvas {...{ page: p, id }} key={p + id} />
      ))}
    </Flex>
  );
};

export default Mushaf;
