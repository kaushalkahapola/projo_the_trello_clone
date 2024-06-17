import { PropsWithChildren } from "react"
import NavBar from "./_components/NavBar"

const DashboradLayout = (
    {children}: PropsWithChildren
) => {
  return (
    <div className="h-full">
        <NavBar />
        {children}
    </div>
  )
}

export default DashboradLayout