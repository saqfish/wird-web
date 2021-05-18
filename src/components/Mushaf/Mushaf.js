import React, { useContext } from "react";
import { Flex } from "theme-ui";

import Canvas from "./Canvas";
import { MainContext } from "../../context";
import { getMaqra, generatePages } from "../../lib/common";
import verses from "../../mushaf/verses";
import quran from "../../mushaf/quran";

let v = [];
for (let chapter of quran) {
  v = v.concat(chapter.verses);
}

const Mushaf = () => {
  const { maqra, offset } = useContext(MainContext);
  const m = getMaqra(maqra);
  const pages = generatePages(maqra, offset);

  const data = (page) => ({
    verse: verses[m.start-1],
    first: page === m.page.start + offset && page > 1,
  });

  return (
    <Flex
      sx={{
        flexDirection: "column",
        overflow: "auto",
        height: "100%",
        minWidth: 576,
      }}
    >
      {pages.map((page, id) => (
        <Canvas
          {...{
            ...data(page),
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
