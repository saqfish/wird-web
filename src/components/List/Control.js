import { Flex, Box, Button } from "theme-ui";
import Juz from "./Juz";

const Control = (props) => {
  const { juz, setJuz } = props;
  return (
    <Flex sx={{ padding: 2, justifyContent: "flex-end" }}>
      <Box>
        <Juz label={`Juz ${juz + 1}`} />
      </Box>
      <Box>
        <Button
          mr={2}
          variant="primary"
          onClick={() => setJuz(juz > 0 ? juz - 1 : juz)}
        >
          Prev
        </Button>
        <Button
          mr={2}
          variant="primary"
          onClick={() => setJuz(juz < 29 ? juz + 1 : juz)}
        >
          Next
        </Button>
      </Box>
    </Flex>
  );
};

export default Control;
