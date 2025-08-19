import { Flex, Stack, Text } from "@mantine/core";
import { resources } from "../../assets/dataTranslations";
import { usePortfolioStore } from "../../store/PortFolioStore";

const AboutMePage = () => {
  const { languageSelected } = usePortfolioStore();

  return (
    <Flex h={"100%"} w={"100%"} align={"center"} p={10}>
      <Stack w={"50%"}>
        <Text fz={{ base: 12, sm: 17 }} maw={400}>
          {resources[languageSelected].aboutMe.aboutText}
        </Text>
      </Stack>
      <Stack w={"50%"} ml={"10%"}>
        <Text c={"primary"} fw={800}>
          {resources[
            languageSelected
          ].aboutMe.education.title.toLocaleUpperCase()}
        </Text>
        <Stack>
          {resources[languageSelected].aboutMe.education.academicHistory.map(
            (val, i) => (
              <Flex w={"100%"} key={i}>
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
                <Text w={"25%"} c={"rgba(183, 174, 214, 0.8)"}>
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
