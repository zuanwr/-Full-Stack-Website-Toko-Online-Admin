"use client";

import Modal from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";
import useStoreModal from "../../../hooks/usestoremodal";
import { useEffect } from "react";

const setupPage = () => {

  const onOpen  = useStoreModal((state)=>state.onOpen)
  const isOpen = useStoreModal((state)=>state.isOpen)

  useEffect(()=>{ 
    if(!isOpen){
      onOpen()
    }
  },[isOpen,onOpen])
  return <div className="p-10">jembut</div>;
};
export default setupPage;
