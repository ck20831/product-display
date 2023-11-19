import {Container, Text} from "@coconut-xr/koestlich";
import {Suspense} from "react";
import Glass from "../ui/Glass";

function Intro() {
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
                alignItems="stretch"
                gapRow={16}
            >
                <Container paddingX={8} paddingY={12} paddingTop={30} alignItems="center">
                    <Suspense>
                        <Text fontSize={30} color="white" fontFamily="test">
                            3D展示空間
                        </Text>
                        <Text paddingY={26} fontSize={20} color="white" fontFamily="test">
                            歡迎來到我們的網頁，結合了3D-R2N2技術，以實現影像的三維重建。
                            我們的目標是將靜態影像中的物體帶入3D空間，並將其融入現實世界，
                            透過混合實境（Mixed Reality，MR）技術，使您能夠在實際環境中查看這些三維物體。
                            立即點擊以下圖片試試
                        </Text>
                    </Suspense>
                </Container>
            </Container>
        </Glass>
    );
}

export default Intro;
