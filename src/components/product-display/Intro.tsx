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
                paddingX={200}
            >
                <Container paddingX={8} paddingY={12} paddingTop={30} alignItems="center">
                    <Suspense>
                        <Text fontSize={32} color="white" fontFamily="test">
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
                <Container  alignItems="center">
                    <Suspense>
                        <Text fontSize={32} color="white" fontFamily="test">
                            研究背景
                        </Text>
                        <Text paddingY={26} fontSize={20} color="white" fontFamily="test">
                            傳統的建模方法對新手學習門檻高及設備昂貴，以及延展實境相對較少人研究
                            我們想提出以少量影像資料進行三維重建並應用於延展實境，包括以下目標
                        </Text>
                        <Text fontSize={32} color="white" fontFamily="test">
                            研究目標
                        </Text>
                        <Text fontSize={24} paddingY={26} color="yellow" fontFamily="test">
                            1.少量影像資料透過深度學習的方式進行三維重建
                        </Text>
                        <Text fontSize={24}  color="yellow" fontFamily="test">
                            2.延展實境(XR)應用
                        </Text>
                    </Suspense>
                </Container>
            </Container>
        </Glass>
    );
}

export default Intro;
