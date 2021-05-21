import React, { useContext, useRef } from "react";

import { Flex, Input, Button } from "theme-ui";
import { MainContext, ProgressContext } from "../../context";
import dayjs from "dayjs";

const Control = () => {
  const { date, maqra } = useContext(MainContext);
  const { progress, setProgress } = useContext(ProgressContext);
  const dateRef = useRef(null);

  const markDate = (ref) => {
    const p = [...progress];
    p[maqra].push(ref.current.value);
    setProgress(p);
  };

  return (
    <Flex sx={{ justifyContent: "flex-end" }}>
      <Input
        type="datetime-local"
        ref={dateRef}
        defaultValue={dayjs(date).format("YYYY-MM-DDTHH:mm:ss")}
        sx={{ fontSize: "1rem" }}
      />
      <Button ml={1} mr={2} onClick={() => markDate(dateRef)}>
        Mark
      </Button>
    </Flex>
  );
};

export default Control;
