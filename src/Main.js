import React, { useState } from "react";
import { Flex, Box } from "theme-ui";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";

import View from "./components/View";
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
          }}
        >
          <Flex sx={{ flexGrow: 1, minWidth: 0, height: 0 }}>
            <Box sx={{ flexGrow: 1, overflow: "auto" }}>
              <List />
            </Box>
            <ProgressContext.Provider value={{ progress, setProgress }}>
              <Flex
                bg="muted"
                sx={{
                  flexDirection: "column",
                  maxHeight: "100vh",
                  minWidth: "fit-content",
                }}
              >
                <Controls />
                <View />
              </Flex>
            </ProgressContext.Provider>
          </Flex>
        </MainContext.Provider>
      </Flex>
    </ThemeProvider>
  );
};

export default Main;
