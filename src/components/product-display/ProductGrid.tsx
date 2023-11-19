import {Container, noAnimation} from "@coconut-xr/koestlich";
import ProductCard from "./ProductCard.tsx";

const products = [
    {
        name: "單人座沙發",
        image: "images/1.png",
        glb: "3D_object/Chair.glb"
    },
    {
        name: "雙人座沙發",
        image: "images/2.jpg",
        glb: "3D_object/Chair.glb"
    },
    {
        name: "雙人座電動沙發",
        image: "images/3.jpg",
        glb: "3D_object/Sofa_Elec.glb"
    },
    {
        name: "人體工學椅",
        image: "images/4.jpg",
        glb: "3D_object/Ergonomic.glb"
    },
    {
        name: "書桌",
        image: "images/5.jpg",
        glb: "3D_object/Desk.glb"
    },
    {
        name: "辦公桌",
        image: "images/6.jpg",
        glb: "3D_object/Office_Desk.glb"
    },
    {
        name: "電腦椅",
        image: "images/7.jpg",
        glb: "3D_object/Computer_Chair.glb"
    },
    {
        name: "餐椅",
        image: "images/8.jpg",
        glb: "3D_object/Dining_Chair.glb"
    },
    {
        name: "電腦螢幕",
        image: "images/9.jpg",
        glb: "3D_object/Display.glb"
    },
    {
        name: "椅凳",
        image: "images/10.jpg",
        glb: "3D_object/Bench.glb"
    },
    {
        name: "鋼琴",
        image: "images/11.jpg",
        glb: "3D_object/Piano.glb"
    },
    {
        name: "儲藏櫃",
        image: "images/12.jpg",
        glb: "3D_object/Cabinet.glb"
    },
];

function ProductGrid() {
    return (
        <Container flexShrink={1} width="100%" overflow="scroll">
            <Container
                flexGrow={1}
                flexDirection="row"
                gapColumn={8}
                gapRow={8}
                flexWrap="wrap"
                width="100%"
                animation={noAnimation}
            >
                {products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </Container>
        </Container>
    );
}


export default ProductGrid;
