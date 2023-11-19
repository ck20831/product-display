import {Container} from "@coconut-xr/koestlich";
import {makeBorderMaterial} from "@coconut-xr/xmaterials";
import {MeshPhongMaterial} from "three";

type GlassProps = Omit<
    React.ComponentPropsWithoutRef<typeof Container>,
    "backgroundOpacity" | "borderBend" | "borderColor" | "material"
>;

const GlassMaterial = makeBorderMaterial(MeshPhongMaterial, {
    specular: "#BBB",
    shininess: 50,
});

function Glass({backgroundColor = 0xE0E0E0, ...props}: GlassProps) {
    return (
        <Container
            backgroundColor={backgroundColor}
            backgroundOpacity={0.8}
            borderColor={backgroundColor}
            border={4}
            borderOpacity={0.8}
            borderBend={0.3}
            material={GlassMaterial}
            {...props}
        />
    );
}

export default Glass;
