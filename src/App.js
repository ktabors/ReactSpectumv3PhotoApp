import { View } from "@adobe/react-spectrum";
import { ImageFiltering } from "./ImageFiltering";
import { ImageTableList } from "./ImageTableList";
import { useState } from "react";

import "./styles.css";

let defaultFilters = {
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
};

let items = [
  {id: 'cp12345', url: 'ca_poppies_.jpg', filename: 'ca_poppies_.jpg', alt: 'White and orange California poppy plants', width: 4032, height: 3024},
  {id: 'be09876', url: 'bread_ear.png', filename: 'bread_ear.jpg', alt: 'Sourdough breakd close up on ear', width: 4032, height: 3024},
  {id: 'ev54321', url: 'EV.jpg', filename: 'EV.jpg', alt: 'EV a black copper maran chicken', width: 3024, height: 4032},
  {id: 'zy67890', url: 'Ziggy.jpg', filename: 'Ziggy.jpg', alt: 'Ziggy a brown striped bantam chick', width: 1007, height: 1343},
  {id: 'fp32457', url: 'flower_patch.png', filename: 'flower_patch.jpg', alt: 'A flower patch of California native plants', width: 2016, height: 1512},
  {id: 'po43526', url: 'PickledOnions.jpg', filename: 'PickledOnions.jpg', alt: 'Fermented red onions', width: 375, height: 500},
  {id: 'ff32497', url: 'flower_focaccia.jpg', filename: 'flower_focaccia.jpg', alt: 'Focaccia decorated with edible plant like a garden scene', width: 768, height: 1024},
  {id: 'tp34529', url: 'two_pizzas.png', filename: 'two_pizzas.png', alt: 'Two sourdough pizzas', width: 500, height: 666},
  {id: 'aa89203', url: 'square_adobe_art.png', filename: 'square_adobe_art.png', alt: 'Styled product logo wall art in Adobe office', width: 1080, height: 1080}
];

export default function App() {
  let [selectedImage, setSelectedImage] = useState();
  let [images, setImages] = useState(items);

  if (selectedImage && !selectedImage.filters) {
    let anImage = {...selectedImage};
    anImage.filters = defaultFilters;
    setSelectedImage(anImage);
  }

  let onClose = () => {
    // save the filter settings
    let updateImages = [...images];
    let replaceIndex = updateImages.findIndex((anImage) => selectedImage.id === anImage.id);
    updateImages.splice(replaceIndex, 1, selectedImage);
    setImages(updateImages);

    // return to table view
    setSelectedImage();
  }

  return (
    <View height="100%">
      {selectedImage && <ImageFiltering selectedImage={selectedImage} setSelectedImage={setSelectedImage} onClose={onClose} />}
      {!selectedImage && <ImageTableList items={images} setSelectedImage={setSelectedImage} />}
    </View>
  );
}
