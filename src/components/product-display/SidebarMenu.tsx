import { Container } from "@coconut-xr/koestlich";
import {
  Clock9,
  GalleryVerticalEnd,
  Mic2,
  Music2,
} from "@coconut-xr/lucide-koestlich";
import SidebarItem from "./SidebarItem";

const menuItems = [
  {
    icon: <Clock9 height={16} width={16} color="white" depth={0} />,
    name: "Recently added",
  },
  {
    icon: <Mic2 height={16} width={16} color="white" depth={0} />,
    name: "Artists",
  },
  {
    icon: <GalleryVerticalEnd height={16} width={16} color="white" depth={0} />,
    name: "Albums",
  },
  {
    icon: <Music2 height={16} width={16} color="white" depth={0} />,
    name: "Songs",
  },
];

function  SidebarMenu() {
  return (
    <Container flexDirection="column" gapRow={8}>
      {menuItems.map((menuItem, index) => (
        <SidebarItem key={index} icon={menuItem.icon}>
          {menuItem.name}
        </SidebarItem>
      ))}
    </Container>
  );
}

export default SidebarMenu;
