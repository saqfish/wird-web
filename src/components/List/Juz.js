import { Flex, Heading } from "theme-ui";

const Label = ({ label }) => (
  <Flex
    mr={2}
    sx={{
      overflow: "hidden",
      whiteSpace: "nowrap",
      width: "100%",
    }}
  >
    <Heading sx={{ flexGrow: 1 }}>{label}</Heading>
  </Flex>
);

const Juz = ({ label, page }) => (
  <Flex
    sx={{
      padding: 1,
      width: "100%",
    }}
  >
    <Label label={label} />
  </Flex>
);

export default Juz;
