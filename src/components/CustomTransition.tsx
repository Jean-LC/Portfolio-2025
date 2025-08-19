import { Button, Divider, Flex, Transition } from "@mantine/core";
import { usePortfolioStore } from "../store/PortFolioStore";
import { useEffect } from "react";

interface Props {
  opened: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChangeLanguageButton = ({ opened, setVisible }: Props) => {
  const { setLanguageSelected } = usePortfolioStore();

  useEffect(() => {
    const idiomaNavegador = navigator.language;
    !idiomaNavegador.includes("es") && setLanguageSelected("en");
  }, []);

  return (
    <Transition
      mounted={opened}
      transition="fade-right"
      duration={200}
      timingFunction="linear"
    >
      {(styles) => (
        <Flex
          bg={"background"}
          style={{
            ...styles,
            position: "absolute",
            top: 53,
            left: 15,
            borderRadius: 100,
          }}
          w={100}
          h={25}
          justify={"center"}
          pl={10}
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
        >
          <Button
            variant="transparent"
            h={25}
            c={"textA"}
            p={0}
            onClick={() => setLanguageSelected("es")}
          >
            ES
          </Button>
          <Divider
            orientation="vertical"
            size={3}
            my={5}
            mx={5}
            color="textB"
          />
          <Button
            variant="transparent"
            h={25}
            c={"textA"}
            p={0}
            onClick={() => setLanguageSelected("en")}
          >
            EN
          </Button>
        </Flex>
      )}
    </Transition>
  );
};

export default ChangeLanguageButton;
