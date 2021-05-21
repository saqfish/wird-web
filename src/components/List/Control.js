import { useContext } from "react";
import { Flex, Box, Button, MenuButton, Close } from "theme-ui";
import Juz from "./Juz";
import { MainContext } from "../../context";

const Control = (props) => {
  const { open, setOpen } = useContext(MainContext);
  const { juz, setJuz } = props;
  return (
	  <Flex sx={{ margin:"0.5rem 0 0 0.5rem", justifyContent: "flex-end" }}>
      {!open ? (
        <MenuButton
          sx={{ height: "100%", flex: 1, justifyContent: "flex-start" }}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Close
          sx={{ height: "100%", flex: 1, justifyContent: "flex-start" }}
          onClick={() => setOpen(false)}
        />
      )}
      <Box>
        <Juz label={`Juz ${juz}`} />
      </Box>
      <Box>
        <Button
          mr={2}
          variant="primary"
          onClick={() => setJuz((juz) => (0 ? juz - 1 : juz))}
        >
          Prev
        </Button>
        <Button
          mr={2}
          variant="primary"
          onClick={() => setJuz(juz <= 29 ? juz + 1 : juz)}
        >
          Next
        </Button>
      </Box>
    </Flex>
  );
};

export default Control;
