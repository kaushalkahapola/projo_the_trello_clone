import { PropsWithChildren } from "react"
import OrgControl from "./OrgControl"

const OrganizationDetailLayout = (
    {children}: PropsWithChildren
) => {
  return (
    <>
    <OrgControl />
    {children}
    </>
  )
}

export default OrganizationDetailLayout