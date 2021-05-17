import React, { useContext, useRef } from "react";

import { Flex, Button } from "theme-ui";
import { MainContext, ProgressContext } from "../../context";
import dayjs from "dayjs";

const Control = () => {
  const { date, setDate, maqra } = useContext(MainContext);
  const { progress, setProgress } = useContext(ProgressContext);
  const dateRef = useRef(null);

  const markDate = (ref) => {
    const p = [...progress];
    p[maqra].push(ref.current.value);
    setProgress(p);
  };

  return (
    <Flex sx={{ justifyContent: "flex-end" }}>
      <input
        type="datetime-local"
        ref={dateRef}
        defaultValue={dayjs(date).format("YYYY-MM-DDTHH:mm:ss")}
        style={{ fontSize: "2em" }}
      />
      <Button mr={5} onClick={() => markDate(dateRef)}>
        Mark
      </Button>
    </Flex>
  );
};

export default Control;
