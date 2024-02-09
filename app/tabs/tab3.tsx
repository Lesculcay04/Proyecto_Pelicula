import { H1, H5,ScrollView } from "tamagui";
import { MyStack } from "../../components/MyStack";
import { CharacterCard } from "../../components/Character";

export default function Tab1() {
  return (
    <>
    <H1  style={styles.dashText}>SCENE1</H1>
    <H5  style={styles.dashText}>CHARACTER</H5>
  
    <ScrollView>
    <MyStack>
      <CharacterCard/>
    </MyStack>
    </ScrollView>
    </>
  );
};

const styles = {
  dashText:{
    marginBottom:8,
    paddingLeft:18
  },

  };