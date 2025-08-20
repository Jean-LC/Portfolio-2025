import { useState } from "react";
import {
  Flex,
  Group,
  Stack,
  Text,
  Title,
  Image,
  Button,
  Tooltip,
} from "@mantine/core";

import worldIcon from "../../assets/world.png";
import githubIcon from "../../assets/github-icon.png";
import linkedinIcon from "../../assets/linkedin-icon.png";
import cvIcon from "../../assets/cv-icon.png";
import { usePortfolioStore } from "../../store/PortFolioStore";
import { resources } from "../../assets/dataTranslations";
import ChangeLanguageButton from "../ChangeLanguageButton";

const PresentationPage = () => {
  const { languageSelected } = usePortfolioStore();
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <Flex
      h={"100%"}
      w={"100%"}
      align={"center"}
      justify={"center"}
      p={{ base: 0, md: 10 }}
      direction={{ base: "column", md: "row" }}
    >
      <Stack
        w={{ base: "100%", md: "50%" }}
        justify="center"
        mt={{ base: 150, md: 0 }}
      >
        <ChangeLanguageButton
          opened={openSettings}
          setVisible={setOpenSettings}
        />
        <Image
          src={worldIcon}
          h={30}
          w={30}
          style={{ position: "absolute", top: 50 }}
          onMouseEnter={() => setOpenSettings(true)}
          onMouseLeave={() => setOpenSettings(false)}
          onClick={() => setOpenSettings(!openSettings)}
        />
        <Title order={1}>
          {resources[languageSelected].presentation.title.split(" ")[0]}
          <br />
          {resources[languageSelected].presentation.title.split(",")[1]}
        </Title>
        <Text maw={320} lh={1.2}>
          {resources[languageSelected].presentation.description}
        </Text>
      </Stack>
      <Stack
        w={{ base: "100%", md: "50%" }}
        align={"center"}
        justify="flex-end"
        h={{ base: "35%", md: "auto" }}
      >
        <Text>{resources[languageSelected].presentation.extraText}</Text>
        <Group justify="center">
          <Tooltip
            label={
              languageSelected === "en"
                ? "Linkedin profile"
                : "Perfil de Linkedin"
            }
          >
            <Button variant="transparent">
              <Image
                src={linkedinIcon}
                h={30}
                w={30}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/jeanette-lc/",
                    "_blank"
                  )
                }
              />
            </Button>
          </Tooltip>
          <Tooltip
            label={
              languageSelected === "en" ? "Github profile" : "Perfil de Githhub"
            }
          >
            <Button variant="transparent">
              <Image
                src={githubIcon}
                h={30}
                w={30}
                onClick={() =>
                  window.open("https://github.com/Jean-LC", "_blank")
                }
              />
            </Button>
          </Tooltip>
          <Tooltip
            label={languageSelected === "en" ? "Complete CV" : "CV Completo"}
          >
            <Button variant="transparent">
              <Image
                src={cvIcon}
                h={30}
                w={30}
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1o9QqoxqAi-OpYzvRMn2xwX_Gn1TcHfIT/view?usp=sharing",
                    "_blank"
                  )
                }
              />
            </Button>
          </Tooltip>
        </Group>
      </Stack>
    </Flex>
  );
};

export default PresentationPage;
