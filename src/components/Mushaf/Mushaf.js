import React, { useContext } from "react";
import { Flex } from "theme-ui";
import m from "mushaf";
import { duri } from "abu_amr";

import Canvas from "./Canvas";
import { MainContext } from "../../context";

const mushaf = m(duri);

const Mushaf = () => {
  const { maqra, offset } = useContext(MainContext);
  const pages = mushaf.generatePages(maqra, offset);

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
            first: page === mushaf.maqras()[maqra].page.start + offset,
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
