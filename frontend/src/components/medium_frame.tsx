import { Byte } from "./byte"

export function MediumFrame(props: any) {
    const mask = props.mask
    const opcode = props.opcode

    return (
        <div className="grid grid-cols-2 gap-4">
            <Byte type = {"first"} fin = {0} opcode = {opcode} color = "bg-header-bytes" />
            <Byte type = {"126"} mask = {mask} color = "bg-header-bytes" />
            <Byte color = "bg-paylen-bytes" />
            <Byte color = "bg-paylen-bytes" />
            <Byte type = {mask} color = "bg-mask-bytes" />
            <Byte type = {mask} color = "bg-mask-bytes" />
            <Byte type = {mask} color = "bg-mask-bytes" />
            <Byte type = {mask} color = "bg-mask-bytes" />
            <Byte/>
            <Byte/>
        </div>
    )
}