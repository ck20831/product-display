import { Container, Text } from "@coconut-xr/koestlich";
import { ReactNode, Suspense, useState } from "react";

type SidebarEntryProps = {
  icon: ReactNode;
  children: string;
};

function SidebarItem({ icon, children }: SidebarEntryProps) {
  const [hoverCount, setHoverCount] = useState(0);

  return (
    <Container
      height={48}
      flexDirection="row"
      alignItems="center"
      gapColumn={12}
      paddingX={8}
      onPointerEnter={() => setHoverCount((current) => current + 1)}
      onPointerLeave={() => setHoverCount((current) => current - 1)}
      backgroundColor="white"
      backgroundOpacity={hoverCount > 0 ? 0.1 : 0}
      borderRadius={16}
    >
      <Suspense>
        <Container
          alignItems="center"
          justifyContent="center"
          width={32}
          height={32}
        >
          {icon}
        </Container>
        <Text color="white" fontSize={16}>
          {children}
        </Text>
      </Suspense>
    </Container>
  );
}

export default SidebarItem;
