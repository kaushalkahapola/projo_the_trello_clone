'use client'

import { useOrganizationList } from "@clerk/nextjs"
import { useParams } from "next/navigation"
import { useEffect } from "react"

const OrgControl = () => {

    const params = useParams()
    const {setActive} = useOrganizationList()

    useEffect(()=>{
        const setOrg = async () => {
            if(!setActive) return
    
            await setActive({
                organization : params.id as string
            })
        }
        setOrg()
    }, [params.id, setActive])

  return null;
}

export default OrgControl