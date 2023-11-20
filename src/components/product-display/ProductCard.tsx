import {Container, Image, Text} from "@coconut-xr/koestlich";
import {Suspense, useState} from "react";
import Glass from "../ui/Glass.tsx";
import {SegmentedControl, SegmentedControlButton} from "@coconut-xr/apfel-kruemel";
import {Gltf} from "@react-three/drei";

type ProductCardProps = {
    name: string;
    image: string;
    glb: string;
};
let globalSetSelectedProduct: ((arg0: string) => void) | null = null;
let globalSetSelectedGlb: ((arg0: string) => void) | null = null;

function ProductCard({name, image, glb}: ProductCardProps) {
    const [hoverCount, setHoverCount] = useState(0);
    const handleClick = () => {
        if (globalSetSelectedProduct) {
            globalSetSelectedProduct(name)
        } //当点击图片时，设置selectedProduct为当前产品的name
        if (globalSetSelectedGlb) {
            globalSetSelectedGlb(glb)
        }
    };

    return (
        <Container
            padding={22}
            flexBasis={260}
            flexGrow={1}
            flexDirection="column"
            onPointerEnter={() => setHoverCount((current) => current + 1)}
            onPointerLeave={() => setHoverCount((current) => current - 1)}
            backgroundColor="white"
            backgroundOpacity={hoverCount > 0 ? 0.3 : 0}
            borderRadius={16}
            onClick={handleClick}
        >
            <Suspense>
                <Image url={image} maxWidth="100%" borderRadius={14}/>
                <Container marginTop={16} alignItems={"center"}>
                    <Text fontSize={20} color="white">
                        {name}
                    </Text>
                </Container>
            </Suspense>
        </Container>
    );
}

export default ProductCard;

export function Picker() {
    const [selectedProduct, setSelectedProduct] = useState('請選擇你要的物件')
    // 设置全局变量为 setSelectedProduct
    globalSetSelectedProduct = setSelectedProduct;

    return (
        <Container
            justifyContent="center"
        >
            <Glass
                justifyContent="center"
                alignItems="center"
                borderRadius={32}
                padding={10}
                positionLeft={60}
                gapRow={30}
                backgroundColor="#AAA"
                height={200}
                border={20}
            >
                <Text fontSize={28} color="white">{selectedProduct}</Text>
                <SegmentedControl defaultValue={1}>
                    <SegmentedControlButton value={1}>
                        <Text>黑色</Text>
                    </SegmentedControlButton>
                    <SegmentedControlButton value={2}>
                        <Text>白色</Text>
                    </SegmentedControlButton>
                    <SegmentedControlButton value={3}>
                        <Text>黃色</Text>
                    </SegmentedControlButton>
                    <SegmentedControlButton value={4}>
                        <Text>藍色</Text>
                    </SegmentedControlButton>
                </SegmentedControl>
            </Glass>
        </Container>
    )
}

export function SelectGlb() {
    const [selectedGlb, setSelectedGlb] = useState("3D_object/Chair.glb")
    // 设置全局变量为 setSelectedProduct
    globalSetSelectedGlb = setSelectedGlb;
    return (
        <Suspense>
            <Gltf position-x={1} position-y={0.5} scale={0.1} src={selectedGlb}/>
        </Suspense>
    )
}