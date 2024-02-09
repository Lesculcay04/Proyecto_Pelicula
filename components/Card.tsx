import type { CardProps } from 'tamagui';
import { Trash } from "@tamagui/lucide-icons";
import { Button, Card, H2, Paragraph, XStack } from 'tamagui';
import { router } from 'expo-router';  // Corregir la importación de 'router'
import DialogDemo from './DialogDemo';

export function DemoCard(props: CardProps) {
return (
    <Card elevate size="$4" bordered {...props}>
    <Card.Header onPress={() => router.push("/tabs/tab2")} padded>
        <H2>FILM1</H2>
        <Paragraph theme="alt2">Director</Paragraph>
        <Paragraph theme="alt2">Time</Paragraph>
    </Card.Header>

    <Card.Footer padded>
        <XStack flex={1} />
        <DialogDemo/>
        <Button borderRadius="$10" icon={Trash}></Button>
    </Card.Footer>
    </Card>
);
}