import { Flex, Text, Title } from "@mantine/core";

const PresentationPage = () => {
  return (
    <Flex bg={"background"} w={"100vw"} h={"100vh"}>
      <Title order={1}>Hola, soy Jeanette!</Title>
      <Text>
        Construyo páginas web centradas en la experiencia del usuario,
        responsivas y con código eficiente
      </Text>
    </Flex>
  );
};

export default PresentationPage;
