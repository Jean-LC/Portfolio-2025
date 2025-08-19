import { Flex, Pill, Stack, Text } from "@mantine/core";
import { resources } from "../../assets/dataTranslations";
import { usePortfolioStore } from "../../store/PortFolioStore";

const ExperiencePage = () => {
  const { languageSelected } = usePortfolioStore();

  return (
    <Flex h={"100%"} w={"100%"} align={"center"} p={10}>
      <Stack w={"50%"}>
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
      <Stack w={"50%"} gap={30}>
        <Text c={"primary"} fw={800}>
          {resources[
            languageSelected
          ].workHistory.jobHistory.title.toLocaleUpperCase()}
        </Text>
        {resources[languageSelected].workHistory.jobHistory.jobData.map(
          (job, i) => (
            <Flex key={i} direction={"row"} w={"100%"}>
              <Text fz={13} w={"25%"}>
                {job.years}
              </Text>
              <Stack ml={"10%"} gap={0} w={'75%'}>
                <Text fw={500}>{job.company}</Text>
                <Text fz={14}>{job.description}</Text>
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
