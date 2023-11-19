import {Container, Text} from "@coconut-xr/koestlich";
import Glass from "../ui/Glass";


function Team() {
    return (
        <Glass
            flexGrow={1}
            flexShrink={1}
            borderRadius={32}
            paddingX={10}
            border={10}
        >
            <Container
                flexGrow={1}
                flexShrink={1}
                flexDirection="column"
                alignItems="center"
                gapRow={16}
            >
                    <Text paddingX={8} paddingY={12} paddingTop={30} alignItems="center" fontSize={30} color="white" fontFamily="test">
                        團隊成員
                    </Text>
            </Container>
        </Glass>
    );
}

export default Team;
