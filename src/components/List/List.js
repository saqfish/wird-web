import React, { useState, useEffect } from "react";
import { Flex } from "theme-ui";
import Control from "./Control";
import Maqra from "./Maqra";

import d from "../..//mushaf/maqras";

const data = d.flat();
const start = (j) => j * 8;
const end = (j) => j * 8 + 8;

const List = () => {
  const [juz, setJuz] = useState(0);
  const [maqras, setMaqras] = useState(data.slice(start(juz), end(juz)));

  useEffect(() => {
    setMaqras(data.slice(start(juz), end(juz)));
  }, [juz]);

  return (
    <>
      <Control {...{ juz, setJuz }} />
      <Flex
        sx={{
          flexDirection: "column",
          fontFamily: "KFGQPC DOORI Uthmanic Script",
          fontSize: ["1em", "2em"],
        }}
      >
        {maqras.map((maqra, m) => (
          <div key={m}>
            <Maqra
              {...{
                maqra,
                index: juz * 8 + m,
              }}
            />
          </div>
        ))}
      </Flex>
    </>
  );
};

export default React.memo(List);
