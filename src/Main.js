import React, { useState } from "react";
import { Container, Flex, Divider } from "theme-ui";
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
          {open ? (
            <ProgressContext.Provider value={{ progress, setProgress }}>
              <Container
                bg="gray"
                pr={[0, 0.8]}
                sx={{
                  minWidth: ["100%", "30%"],
                  maxWidth: ["100%", "30%"],
                  height: "100vh",
                  position: "fixed",
                }}
              >
                <Flex
                  bg="background"
                  sx={{
                    height: "100vh",
                    flexDirection: "column",
                  }}
                >
                  <List />
                  <Divider />
                  <Detail />
                </Flex>
              </Container>
            </ProgressContext.Provider>
          ) : null}
          <Flex sx={{ flexGrow: 1, height: "100%", minWidth: 0 }}>
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
