import React, { useState } from "react";
import { Flex } from "theme-ui";
import { mushaf } from "mushaf";
import Control from "./Control";
import Maqra from "./Maqra";

const List = () => {
  const [juz, setJuz] = useState(1);
  const [maqras] = useState(mushaf.juz(juz));

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
