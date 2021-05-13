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
  let controlWidth = isMobile ? "100%" : "size-3000";
  let mobileHeight = isMobile ? { height: "50%" } : {};

  return (
    <Flex direction={layoutDirection} height="100vh">
      <View
        backgroundColor="gray-50"
        flex="1 1 auto"
        padding="size-200"
        {...mobileHeight}
      >
        <ImageView filters={filters} />
      </View>
      <View
        backgroundColor="gray-100"
        marginStart="size-100"
        marginEnd="size-100"
        flex="0 0 auto"
        width={controlWidth}
        {...mobileHeight}
      >
        <ImageControls filters={filters} setFilters={setFilters} />
      </View>
    </Flex>
  );
}
