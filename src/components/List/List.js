import React, { useEffect, useState, useContext } from "react";
import { Flex } from "theme-ui";
import Control from "./Control";
import Maqra from "./Maqra";
import { MainContext } from "../../context";

import m from "mushaf";
import { duri } from "abu_amr";

const mushaf = m(duri);

const List = () => {
  const { maqra } = useContext(MainContext);
  const [juz, setJuz] = useState(mushaf.getJuzIndex(maqra) + 1);
  const [maqras, setMaqras] = useState(mushaf.juz(juz));

  useEffect(() => setMaqras(mushaf.juz(juz)), [juz]);

  return (
    <>
      <Control {...{ juz, setJuz }} />
      <Flex
        mt={2}
        sx={{
          flexDirection: "column",
          fontFamily: "KFGQPC DOORI Uthmanic Script",
          fontSize: "1.2em",
        }}
      >
        {maqras.map((maqra, m) => (
          <div key={m}>
            <Maqra
              {...{
                maqra,
                index: (juz - 1) * 8 + m,
              }}
            />
          </div>
        ))}
      </Flex>
    </>
  );
};

export default React.memo(List);
