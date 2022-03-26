import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiFileChartLine, RiLineChartLine, RiMoneyDollarBoxLine, RiStore3Line } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return(
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiLineChartLine} href="/dashboard">Dashboard</NavLink>
        <NavLink icon={RiContactsLine} href="/users">Clientes</NavLink>
        <NavLink icon={RiFileChartLine} href="/finances">Financeiro</NavLink>
        <NavLink icon={RiFileChartLine} href="/#">OLa</NavLink>
      </NavSection>

      <NavSection title="ESTOQUE">
        <NavLink icon={RiStore3Line} href="/forms">Produtos</NavLink>
      </NavSection>

      <NavSection title="FRENTE DE CAIXA">
        <NavLink icon={RiMoneyDollarBoxLine} href="/forms">Caixa</NavLink>
      </NavSection>
    </Stack>
  );
}