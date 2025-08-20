import { Flex, Stack, Text, Title } from "@mantine/core";
import { resources } from "../../assets/dataTranslations";
import { usePortfolioStore } from "../../store/PortFolioStore";

const AboutMePage = () => {
  const { languageSelected } = usePortfolioStore();

  return (
    <Flex
      h={"100%"}
      w={"100%"}
      align={"center"}
      p={10}
      direction={{ base: "column", md: "row" }}
    >
      <Title order={2} hiddenFrom="md" mb={20}>
        {languageSelected === "en" ? "About me" : "Acerca de mí"}
      </Title>
      <Stack w={{ base: "100%", md: "50%" }} mb={{ base: 30, md: 0 }}>
        <Text maw={400} ta={{ base: "center", md: "left" }}>
          {resources[languageSelected].aboutMe.aboutText}
        </Text>
      </Stack>
      <Stack w={{ base: "100%", md: "50%" }} ml={"10%"}>
        <Text c={"primary"} fw={800}>
          {resources[
            languageSelected
          ].aboutMe.education.title.toLocaleUpperCase()}
        </Text>
        <Stack mb={{ base: 30, md: 20 }}>
          {resources[languageSelected].aboutMe.education.academicHistory.map(
            (val, i) => (
              <Flex
                w={"100%"}
                key={i}
                direction={{ base: "column", md: "row" }}
              >
                <Text w={"25%"} c={"rgba(183, 174, 214, 0.8)"}>
                  {val.years}
                </Text>
                <Stack align="flex-start" gap={0}>
                  <Text fw={800}>{val.school}</Text>
                  <Text>{val.degree}</Text>
                </Stack>
              </Flex>
            )
          )}
        </Stack>
        <Text c={"primary"} fw={800}>
          {resources[
            languageSelected
          ].aboutMe.languages.title.toLocaleUpperCase()}
        </Text>
        <Stack>
          {resources[languageSelected].aboutMe.languages.languageSkills.map(
            (val, i) => (
              <Flex w={"100%"} key={i}>
                <Text
                  w={{ base: "50%", md: "25%" }}
                  c={"rgba(183, 174, 214, 0.8)"}
                >
                  {val.level}
                </Text>

                <Text>{val.name}</Text>
              </Flex>
            )
          )}
        </Stack>
      </Stack>
    </Flex>
  );
};

export default AboutMePage;
