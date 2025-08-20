import { Flex, Pill, Stack, Text } from "@mantine/core";
import { resources } from "../../assets/dataTranslations";
import { usePortfolioStore } from "../../store/PortFolioStore";

const ExperiencePage = () => {
  const { languageSelected } = usePortfolioStore();

  return (
    <Flex
      h={"100%"}
      w={"100%"}
      align={"center"}
      p={{ base: 0, md: 10 }}
      direction={{ base: "column", md: "row" }}
    >
      <Stack w={{ base: "100%", md: "50%" }} visibleFrom="md">
        <Text c={"primary"} fw={800}>
          {resources[
            languageSelected
          ].workHistory.skills.title.toLocaleUpperCase()}
        </Text>
        <Flex wrap={"wrap"} gap={5} maw={450}>
          {resources[languageSelected].workHistory.skills.skillsData.map(
            (val, i) => (
              <Pill size="md" key={i}>
                {val}
              </Pill>
            )
          )}
        </Flex>
      </Stack>
      <Stack w={{ base: "100%", md: "50%" }} gap={0}>
        <Text c={"primary"} fw={800}>
          {resources[
            languageSelected
          ].workHistory.jobHistory.title.toLocaleUpperCase()}
        </Text>
        {resources[languageSelected].workHistory.jobHistory.jobData.map(
          (job, i) => (
            <Flex
              key={i}
              direction={{ base: "column", md: "row" }}
              w={"100%"}
              mb={{ base: 20, md: 30 }}
            >
              <Text
                fz={{ base: ".8rem", md: "inherit" }}
                w={{ base: "100%", md: "25%" }}
              >
                {job.years}
              </Text>
              <Stack
                ml={{ base: 0, md: "10%" }}
                gap={0}
                w={{ base: "100%", md: "75%" }}
              >
                <Text fw={500}>{job.company}</Text>
                <Text fz={{ base: ".8rem", md: "inherit" }}>
                  {job.description}
                </Text>
                <Flex wrap={"wrap"} gap={5}>
                  {job.skills.map((skillJob, i) => (
                    <Pill key={skillJob + i}>{skillJob}</Pill>
                  ))}
                </Flex>
              </Stack>
            </Flex>
          )
        )}
      </Stack>
    </Flex>
  );
};

export default ExperiencePage;
