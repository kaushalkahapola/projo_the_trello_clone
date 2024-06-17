import { OrganizationList } from "@clerk/nextjs";

export default function SelectOrgPage() {
  return <OrganizationList 
    hidePersonal
    afterCreateOrganizationUrl='/organizations/:id'
    afterSelectOrganizationUrl='/organizations/:id'
  />;
}