import { Box } from "@mui/material";
import Lottie from "lottie-react";
import loading from "./loading.json";

const Loading = () => {
  return (
    <Box
      display="flex"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box width="100px">
        <Lottie animationData={loading} loop={true} />
      </Box>
      <Box
        fontSize="28px"
        fontWeight="400"
        lineHeight="36px"
        letterSpacing="-0.1px"
      >
        Loading...
      </Box>
    </Box>
  );
};

export default Loading;
