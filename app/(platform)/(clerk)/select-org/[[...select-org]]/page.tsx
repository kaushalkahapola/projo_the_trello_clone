import NavBar from "@/app/(platform)/(dashboard)/_components/NavBar";
import { OrganizationList } from "@clerk/nextjs";

export default function SelectOrgPage() {
  return <>
  <NavBar />
  <OrganizationList 
    hidePersonal
    afterCreateOrganizationUrl='/organizations/:id'
    afterSelectOrganizationUrl='/organizations/:id'
  />
  </>;
}