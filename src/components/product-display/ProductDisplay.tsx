import {FontFamilyProvider, RootContainer} from "@coconut-xr/koestlich";
import {useThree} from "@react-three/fiber";
import {SetStateAction, Suspense, useState, useMemo} from "react";
import Products from "./Products";
import Intro from "./Intro";
import Team from "./Team";
import TabBarsPage from "./Sidebar.tsx";


function ProductDisplay() {

    const [activePage, setActivePage] = useState('product');
    const aspectRatio = useThree(({size}) => size.width / size.height);

    const fontFamilies = useMemo(() => ({
        medium: ["https://coconut-xr.github.io/msdf-fonts/", "inter.json"] as [string, string],
        bold: ["https://coconut-xr.github.io/msdf-fonts/", "inter-bold.json"] as [string, string],
        test: ["/font/test-msdf/", "test-msdf.json"] as [string, string],
        ar: ["/font/AROneSans-Regular-msdf/", "AROneSans-Regular-msdf.json"] as [string, string]
    }), []);

    const handleChangePage = (newPage: SetStateAction<string>) => {
        setActivePage(newPage);
    };

    return (
        <group position={[0, 1.5, -0.5]} scale={Math.min(1, aspectRatio * 0.6) / 1200}>
            <FontFamilyProvider
                fontFamilies={fontFamilies}
                defaultFontFamily="medium"
            >
                <Suspense fallback={null}>
                    <RootContainer
                        anchorX="center"
                        anchorY="center"
                        sizeX={1600}
                        sizeY={800}
                        pixelSize={1}
                        positionType="relative"
                        display="flex"
                        flexDirection="row"
                        alignItems="stretch"
                    >
                        <TabBarsPage onPageChange={handleChangePage}/>
                        {/*<Sidebar onPageChange={handleChangePage}/>*/}
                        {(activePage === 'product' || activePage === 'picker') && <Products/>}
                        {activePage === 'intro' && <Intro/>}
                        {activePage === 'team' && <Team/>}
                    </RootContainer>
                </Suspense>
            </FontFamilyProvider>
        </group>
    );
}

export default ProductDisplay;