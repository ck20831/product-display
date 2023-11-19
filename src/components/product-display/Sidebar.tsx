import {TabBar, TabBarItem} from "@coconut-xr/apfel-kruemel";
import {Container, Text} from "@coconut-xr/koestlich";
import {Home, Info, Users} from "@coconut-xr/lucide-koestlich";

// @ts-ignore
export default function TabBarsPage({onPageChange}) {

    const handleButtonClick = (newPage: string) => {
        onPageChange && onPageChange(newPage);
    };

    return (
        <Container
            positionLeft={-120}
            justifyContent="center"
        >
            <TabBar defaultValue={1} color="#CCC">
                <TabBarItem value={1} icon={<Home height={20} width={20}/>} onClick={() => handleButtonClick('product')}>
                    <Text fontSize={20}>3D展示空間</Text>
                </TabBarItem>
                <TabBarItem value={2} icon={<Info height={20} width={20}/>} onClick={() => handleButtonClick('intro')}>
                    <Text fontSize={20}>介紹</Text>
                </TabBarItem>
                <TabBarItem value={3} icon={<Users height={20} width={20}/>} onClick={() => handleButtonClick('team')}>
                    <Text fontSize={20}>團隊成員</Text>
                </TabBarItem>
            </TabBar>
        </Container>
    );
}