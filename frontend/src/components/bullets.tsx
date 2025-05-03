import { 
    Alert,
    AlertDescription,
    AlertTitle,
    } from "@/components/ui/alert"

import { Terminal } from "lucide-react"

export function Bullets(props: any) {
    const mask = props.mask
    const type = props.type
    const opcode = props.opcode
    let title;
    let array = []

    switch(type) {
        case "medium":
            title = "If the length is >= 126 and < 65536 bytes"
            array = [
                "The 7 bit length will be exactly 126 (1111110)",
                "The next 16 bits represents the payload length"
            ]
            break;
        case "large":
             title = "If the length is >= 65536 bytes"
             array = [
                "The 7 bit length will be exactly 127 (1111111)",
                "The next 64 bits represents the payload length"
             ]
            break;
        default:
            title = "If the length is < 126 bytes"
            array = [
                "The length is represented in 7 bits, sharing a byte with the MASK bit",
                "The next bit after the length is either the mask or payload",
            ]
    }

    return (
        <div className="pt-10">
            <Alert className="w-130">
                <Terminal className="h-4 w-4" />
                <AlertTitle className="text-left">{title}</AlertTitle>
                { array?.map((bullet, i) => {
                    return <AlertDescription key={i}>- {bullet}</AlertDescription>
                }) }
                <AlertDescription className="inline-block text-left">- The current opcode is <b><u>{opcode}</u></b>.</AlertDescription>
                { mask === 1 ? <AlertDescription>- The next 4 bytes will be the mask.</AlertDescription> : <></> }
            </Alert>
        </div>
    )
}