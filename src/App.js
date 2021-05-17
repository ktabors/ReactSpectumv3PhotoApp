import { Flex, View } from "@adobe/react-spectrum";
import { ImageControls } from "./ImageControls";
import { ImageView } from "./ImageView";
import { useState } from "react";
import { useMediaQuery } from "@react-spectrum/utils";

import "./styles.css";

export default function App() {
  let [filters, setFilters] = useState({
    brightness: 0,
    color: "#FFFFFF",
    contrast: 0,
    isFlipHorizontal: false,
    isFlipVertical: false,
    hueRotate: 0,
    invert: 0,
    isBandW: false,
    opacity: 1,
    rotate: 0,
    saturate: 0,
    sepia: 0
  });

  let isMobile = useMediaQuery("(max-width: 700px)");
  let layoutDirection = isMobile ? "column" : "row";
  let controlWidth = isMobile ? "100%" : "300px";

  return (
    <Flex direction={layoutDirection} height="100%">
      <View
        backgroundColor="gray-50"
        flex="1 1 0"
        padding="size-200"
        minHeight="0px"
        minWidth="0px"
      >
        <ImageView filters={filters} />
      </View>
      <View
        backgroundColor="gray-100"
        flex={isMobile ? "1 1 0" : "0 0 auto"}
        minHeight="0px"
        minWidth="0px"
        width={controlWidth}
      >
        <ImageControls filters={filters} setFilters={setFilters} />
      </View>
    </Flex>
  );
}
