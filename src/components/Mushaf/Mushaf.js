import React, { useContext } from "react";
import { Flex } from "theme-ui";
import { mushaf } from "mushaf";

import Canvas from "./Canvas";
import { MainContext } from "../../context";
import { generatePages } from "../../lib/common";

const Mushaf = () => {
  const { maqra, offset } = useContext(MainContext);
  const pages = generatePages(maqra, offset);

  const pos =
    maqra < 1 ? 0 : mushaf.verses[mushaf.maqras()[maqra].verse.number - 2].line;
  return (
    <Flex
      sx={{
        flexDirection: "row-reverse",
        overflow: "auto",
      }}
    >
      {pages.map((page, id) => (
        <Canvas
          {...{
            pos,
            first: mushaf.maqras()[maqra].page.start,
            page,
            id,
          }}
          key={page + id}
        />
      ))}
    </Flex>
  );
};

export default Mushaf;
