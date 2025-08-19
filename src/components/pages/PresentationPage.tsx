import { Flex, Group, Stack, Text, Title, Image } from "@mantine/core";
import { usePortfolioStore } from "../../store/PortFolioStore";
import { resources } from "../../assets/dataTranslations";
import worldIcon from "../../assets/world.png";
import ChangeLanguageButton from "../CustomTransition";
import { useState } from "react";

const PresentationPage = () => {
  const { languageSelected } = usePortfolioStore();
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <Flex h={"100%"} w={"100%"} align={"center"} p={10}>
      <Stack w={"50%"}>
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
        />
        <Title order={1} fz={40}>
          {resources[languageSelected].presentation.title.split(" ")[0]}
          <br />
          {resources[languageSelected].presentation.title.split(",")[1]}
        </Title>
        <Text maw={320} fz={20} lh={1.2}>
          {resources[languageSelected].presentation.description}
        </Text>
      </Stack>
      <Stack w={"50%"} align="center">
        <Text fz={20}>
          {resources[languageSelected].presentation.extraText}
        </Text>
        <Group justify="center">
          <Text>LN</Text>
          <Text>GH</Text>
          <Text>GH</Text>
        </Group>
      </Stack>
    </Flex>
  );
};

export default PresentationPage;
