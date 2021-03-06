import React, { useContext } from "react";
import { Flex, Box } from "theme-ui";
import { mushaf } from "mushaf";

import { MainContext } from "../../context";

const Page = ({ page }) => (
  <Box sx={{ margin: "0 5% 0 5%", flexBasis: "auto" }}>{page}</Box>
);
const Verse = ({ verse }) => {
  return (
    <Box
      sx={{
        flex: "1",
        overflow: "hidden",
        whiteSpace: "nowrap",
        direction: "rtl",
        textAlign: "left",
        textOverflow: "ellipsis",
      }}
    >
      <span>{verse}</span>
    </Box>
  );
};

const Maqra = (props) => {
  const { maqra: selected, setMaqra } = useContext(MainContext);
  const { maqra, index } = props;
  return (
    <Flex
      bg={selected === index ? "highlight" : ""}
      sx={{
        padding: 1,
        paddingLeft: "1vw",
        width: "100%",
      }}
      onClick={() => {
        setMaqra(index);
      }}
    >
      <Verse verse={maqra.verse.text} />
      <Page page={maqra.page.start} />
    </Flex>
  );
};

export default Maqra;
