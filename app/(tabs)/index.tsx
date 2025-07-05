import Button from "@/components/Buttons";
import ImageViewer from "@/components/imageViewer";
import { StyleSheet, View } from "react-native";

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>

      <View style={styles.footerContainer}>
          <Button label="Choose a photo" theme="primary"/>
          <Button label="Use this photo" />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    height: 170,
    alignItems: "center",
  }
})