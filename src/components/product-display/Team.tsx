import {Container, Text} from "@coconut-xr/koestlich";
import Glass from "../ui/Glass";
import {Suspense} from "react";


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
                paddingX={200}

            >
                <Container paddingX={8} paddingY={12} paddingTop={30} alignItems="center">
                <Suspense>
                    <Text fontSize={32} color="white" fontFamily="test">
                        團隊成員
                    </Text>
                    <Text paddingY={26} fontSize={20} color="white" fontFamily="test">
                        組長：陳至楷
                    </Text>
                    <Text fontSize={26} paddingY={26} color="white" fontFamily="test">
                        組員：李柏毅、陳見銜
                    </Text>
                    <Text fontSize={26} paddingY={26} color="white" fontFamily="test">
                        指導教授：陳郁文
                    </Text>
                </Suspense>
                </Container>
            </Container>
        </Glass>
    );
}

export default Team;
