import React, { useState } from "react";
import { Flex, Divider } from "theme-ui";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";

import View from "./components/View";
import Detail from "./components/Detail/Detail";
import List from "./components/List/List";
import Controls from "./components/Controls/Controls";
import { MainContext, ProgressContext } from "./context";

const offset = 3;

const initProgress = () => {
  let p = [];
  for (let i = 0; i < 240; i++) p.push([]);
  return p;
};

const Main = () => {
  const [view, setView] = useState(0);
  const [open, setOpen] = useState(false);
  const [maqra, setMaqra] = useState(0);
  const [progress, setProgress] = useState(initProgress());

  return (
    <ThemeProvider theme={theme}>
      <Flex
        sx={{
          height: "100vh",
          maxHeight: "100vh",
          flexDirection: "column",
        }}
      >
        <MainContext.Provider
          value={{
            view,
            setView,
            maqra,
            setMaqra,
            offset,
            open,
            setOpen,
          }}
        >
          <Controls />
          <Flex sx={{ flexGrow: 1, minWidth: 0, height: 0 }}>
            {open ? (
              <ProgressContext.Provider value={{ progress, setProgress }}>
                <Flex
                  sx={{
                    flexDirection: "column",
                    minWidth: ["100vw", "30vw"],
                    maxWidth: ["100vw", "30vw"],
                  }}
                >
                  <List />
                  <Divider />
                  <Detail />
                </Flex>
              </ProgressContext.Provider>
            ) : null}
            <Flex
              bg="muted"
              sx={{
                flexDirection: "column",
                maxHeight: "100vh",
                width: "100vw",
                overflow: "auto",
              }}
            >
              <View />
            </Flex>
          </Flex>
        </MainContext.Provider>
      </Flex>
    </ThemeProvider>
  );
};

export default Main;
