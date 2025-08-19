import { Flex } from "@mantine/core";
import PresentationPage from "./PresentationPage";
import { Carousel } from "@mantine/carousel";
import { useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import AboutMePage from "./AboutMePage";
import ExperiencePage from "./ExperiencePage";

const MainPage = () => {
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);

  // const handleNext = () => embla?.scrollNext();
  // const handlePrev = () => embla?.scrollPrev();

  const handleWheel = (event: any) => {
    // Scroll hacia abajo
    if (event.deltaY > 0) {
      embla?.scrollNext();
    }
    // Scroll hacia arriba
    else if (event.deltaY < 0) {
      embla?.scrollPrev();
    }
  };

  return (
    <Flex
      bg={"background"}
      miw={"100vw"}
      mih={"100vh"}
      justify={"center"}
      align={"center"}
      onWheel={handleWheel}
    >
      <Carousel
        getEmblaApi={(embla) => setEmbla(embla)}
        orientation="vertical"
        height={"80vh"}
        w={"80vw"}
        withIndicators
        withControls={false}
        styles={{
          indicator: {
            borderRadius: 5,
            backgroundColor: "#6653A2",
            width: 20,
            height: 20,
          },
          indicators: {
            flexDirection: "row",
            alignItems: "flex-end",
          },
        }}
      >
        <Carousel.Slide w={"100%"}>
          <PresentationPage />
        </Carousel.Slide>
        <Carousel.Slide w={"100%"}>
          <AboutMePage />
        </Carousel.Slide>
        <Carousel.Slide w={"100%"}>
          <ExperiencePage />
        </Carousel.Slide>
      </Carousel>
    </Flex>
  );
};

export default MainPage;
