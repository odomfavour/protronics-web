import { Metadata } from "next"
import PCBDesignPage from "./PCBDesign"

export const metadata: Metadata = {
  title: 'PCB Design - Protronics Inc.',
  description:
    'The quick turn EMS, PCB Design, PCB assembly and IC packaging specialist',
}

export default function page() {
  return (
    <PCBDesignPage />
  )
}