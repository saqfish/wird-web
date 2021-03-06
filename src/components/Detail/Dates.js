import React, { useContext, useRef, useEffect, useState } from "react";
import { Flex, Box, Close } from "theme-ui";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { MainContext, ProgressContext } from "../../context";

dayjs.extend(relativeTime);

const DateItem = (props) => {
  const { mounted, value } = props;
  const [date, setDate] = useState(value);

  useEffect(() => {
    let timer;
    const check = dayjs().diff(dayjs(date), "hour");
    setDate(dayjs(date));
    if (check < 1)
      timer = setInterval(() => {
        if (mounted.current) setDate(dayjs(date));
      }, 60000); // Update every minute
    return () => {
      if (check) clearInterval(timer);
    };
  }, []);

  return (
    <Flex
      bg="primary"
      color="background"
      mt={1}
      sx={{
        width: "100%",
        border: "0.1rem solid black",
      }}
      onClick={() => {}}
    >
      <Box p={1} sx={{ flexGrow: 1 }}>
        {dayjs(date).fromNow()}
      </Box>
      {props.children}
    </Flex>
  );
};

const Dates = () => {
  const mounted = useRef(false);
  const { maqra } = useContext(MainContext);
  const { progress, setProgress } = useContext(ProgressContext);

  const remove = (d) => {
    const prev = [...progress];
    prev[maqra].splice(d, 1);
    setProgress(prev);
  };

  useEffect(() => {
    mounted.current = true;
    return () => (mounted.current = false);
  }, []);

  return (
    <Flex
      sx={{
        flex: 1,
        overflow: "auto",
        padding: 3,
        flexDirection: "column",
        height: "100%",
        maxHeight: "100%",
      }}
    >
      {progress[maqra].map((data, i) => (
        <DateItem key={data + i} mounted={mounted} value={data.valueOf()}>
          <Close
            sx={{ height: "2rem", width: "2rem" }}
            onClick={() => {
              remove(i);
            }}
          />
        </DateItem>
      ))}
    </Flex>
  );
};

export default Dates;
