'use client'

import { StoreModal } from "@/components/modal/store-modal"
import { useEffect, useState } from "react"

const ModalProvider = () => {
    const [ismounnted, setismounted] = useState(false)

    useEffect(() => {
        setismounted(true)
    }, [])

    if(!ismounnted){
        return null;;
    }
    return (
        <>
            <StoreModal />
        </>
    )
}
export default ModalProvider