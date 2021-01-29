import "react-app-polyfill/ie11";
import * as React from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Text, IconButton } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { FaDiscord, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export const SideBar = () => {
  const iconProps = {
    bgColor: "black",
    color: "white",
    w: "40%"
  };

  return (
    <Grid background={"black"} templateColumns="repeat(2, 1fr)" gap={"50%"} padding={5}>
      <Grid templateColumns="repeat(2, 0fr)" flexDirection="row" paddingLeft={"40%"}>
        <Link to="/home">
          <Button borderRadius="md" w="80%" h="10" bg="black">
            <Text color="white">HOME</Text>
          </Button>
        </Link>
        <Link to="/about">
          <Button borderRadius="md" w="80%" h="10" bg="black">
            <Text color="white">ABOUT</Text>
          </Button>
        </Link>
      </Grid>
      <Grid flexDirection={"row"} templateColumns="repeat(5, 0fr)" gap={0}>
        <a href="https://www.youtube.com/channel/UC6Itkp5eh2lKwCW_IfeiccA">
          <IconButton {...iconProps} aria-label="youtube" icon={<FaYoutube />} />
        </a>
        <a href="https://www.linkedin.com/in/yari-ivan-taft-4122a7153/">
          <IconButton {...iconProps} aria-label="linkedIn" icon={<FaLinkedinIn />} />
        </a>
        <a href="https://www.github.com/yaritaft">
          <IconButton {...iconProps} aria-label="github" icon={<FaGithub />} />
        </a>
        <IconButton {...iconProps} aria-label="discord" icon={<FaDiscord />} />
        <ColorModeSwitcher flexDirection={"row"} w="40%" bgColor={"black"} color={"white"} />
      </Grid>
    </Grid>
  );
};
