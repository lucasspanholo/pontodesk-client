import { Stack } from "@chakra-ui/react";
import { RiTeamFill, RiTaskLine, RiLineChartLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return(
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiLineChartLine} href="/dashboard">Dashboard</NavLink>
        <NavLink icon={RiTaskLine} href="/calls">Chamados</NavLink>
        <NavLink icon={RiTeamFill} href="/users">Usuários</NavLink>
      </NavSection>
    </Stack>
  );
}