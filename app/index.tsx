
import { Link, useRouter } from "expo-router";
import {
  Button,
  H1,
  Paragraph,
  Separator,
  YGroup,
  YStack
} from "tamagui";
import { Image } from 'react-native';

import { MySafeAreaView } from "../components/MySafeAreaView";
import { MyStack } from "../components/MyStack";
import Batman from "../assets/img/batman2.jpg"

export default function Home() {
  const router = useRouter();

  return (
    <MySafeAreaView>
      <MyStack>
        <YStack
          space="$4"
          maxWidth={600}
        >
          <Image
            source={Batman}
            style={{ width: '112%', height: '65%', alignSelf: 'center' }}/>
          <H1 textAlign="center"  fontSize={40}>El caballero de la noche</H1>
          <Paragraph textAlign="center">
            Here&apos;s a basic starter to show navigating from one screen to
            another.
          </Paragraph>
          
        </YStack>
        
        <YStack space="$2.5">
          
          <Button size="$5" theme="active" style={{ backgroundColor: 'steelblue', color: 'white' }} onPress={() => router.push("/tabs")}>BEGIN</Button>
        </YStack>

        <YStack space="$5">
          <YGroup
            bordered
            separator={<Separator />}
            theme="green"
          >
          </YGroup>
        </YStack>
      </MyStack>
    </MySafeAreaView>
  );
}


// REDIRECCIONAMIENTO PARA MANDAR AL USUARIO A CONFIG
/*<Button onPress={() => router.push("/users/testuser")}>
Go to user page
</Button>*/