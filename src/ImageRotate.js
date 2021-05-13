import { ActionButton, Flex, ToggleButton, View } from "@adobe/react-spectrum";
import FlipHorizontal from "@spectrum-icons/workflow/FlipHorizontal";
import FlipVertical from "@spectrum-icons/workflow/FlipVertical";
import RotateCCW from "@spectrum-icons/workflow/RotateCCW";
import RotateCW from "@spectrum-icons/workflow/RotateCW";

const ImageRotate = (props) => {
  let { filters, setFilters } = props;
  let { isFlipHorizontal, isFlipVertical, rotate } = filters;

  return (
    <View maxHeight="100%" overflow="scroll">
      <Flex
        direction="row"
        rowGap="size-300"
        alignItems="center"
        marginTop="size-100"
        marginBottom="size-100"
      >
        <ActionButton
          aria-label="Rotate counter clockwise"
          isQuiet
          onPress={() => {
            setFilters({
              ...filters,
              rotate: rotate - 90
            });
          }}
        >
          <RotateCCW />
        </ActionButton>
        <ActionButton
          aria-label="Rotate clockwise"
          isQuiet
          onPress={(value) => {
            setFilters({
              ...filters,
              rotate: rotate + 90
            });
          }}
        >
          <RotateCW />
        </ActionButton>
        <ToggleButton
          aria-label="Flip horizontal"
          isQuiet
          isSelected={isFlipHorizontal}
          onChange={(value) => {
            setFilters({
              ...filters,
              isFlipHorizontal: value
            });
          }}
        >
          <FlipHorizontal />
        </ToggleButton>
        <ToggleButton
          aria-label="Flip vertical"
          isQuiet
          isSelected={isFlipVertical}
          onChange={(value) => {
            setFilters({
              ...filters,
              isFlipVertical: value
            });
          }}
        >
          <FlipVertical />
        </ToggleButton>
      </Flex>
    </View>
  );
};

export { ImageRotate };
