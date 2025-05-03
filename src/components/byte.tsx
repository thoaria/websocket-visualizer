import {
    Card,
    CardContent,
    // CardDescription,
    // CardFooter,
    // CardHeader,
    // CardTitle,
  } from "@/components/ui/card"

import { Bit } from "./bit"

export function Byte(props: any) {
    const type = props.type
    const mask = props.mask
    const fin = props.fin
    const opcode = props.opcode
    const color = props.color
    let className = type === 0 ? " hidden" : ""
    className += ` ${color}`
    let hidden = " hidden"
    let second = " hidden"
    const payload_len: any = {
        "< 126" : " < 126",
        "126" : " == 126",
        "127" : " == 127"
    }
    let array: any = []
    let opArr: any = []

    switch(opcode) {
        case "0001":
            opArr = [0, 0, 0, 1]
            break;
        case "0010":
            opArr = [0, 0, 1, 0]
            break;
        case "0000":
            opArr = [0, 0, 0, 0]
            break;
        case "1000":
            opArr = [1, 0, 0, 0]
            break;
        default:
            opArr = [0, 0, 0, 0]
    }

    switch(type) {
        case "first":
            array = [fin, 0, 0, 0]
            array = array.concat(opArr)
            hidden = ""
            break;
        case "< 126":
            array = [mask, 0, 0, 0, 0, 0, 0, 0]
            second = ""
            break;
        case "126":
            array = [mask, 1, 1, 1, 1, 1, 1, 0]
            second = ""
            break;
        case "127":
            array = [mask, 1, 1, 1, 1, 1, 1, 1]
            second = ""
            break;
        default:
            array = [0, 0, 0, 0, 0, 0, 0, 0]
    }

    return (
        <Card className={"w-100 flex flex-col gap-1" + className}>
              <CardContent className="flex flex-row justify-center gap-2">
                { array?.map((bit: any, i: any) => {
                    return <Bit label = {i} value = {bit} type = {type} />
                }) }
              </CardContent>
              <div className={"flex flex-row justify-around content-center w-100 absolute mt-27" + hidden }>
                <div className="w-41"></div>
                <div className="flex flex-row justify-center items-center gap-6">
                    <div className="flex items-center">
                        <div className="h-[10px] w-[1px] bg-white"></div>
                        <div className="h-[1px] w-10 bg-white"></div>
                    </div>
                    <div className="text-white">opcode</div>
                    <div className="flex items-center">
                        <div className="h-[1px] w-10 bg-white"></div>
                        <div className="h-[10px] w-[1px] bg-white"></div>
                    </div>
                </div>
              </div>

              <div className={"flex flex-row justify-start content-center w-100 absolute mt-27" + second}>
                <div className="w-14.5"></div>
                <div className="flex flex-row justify-center items-center gap-13.5">
                    <div className="flex items-center">
                        <div className="h-[10px] w-[1px] bg-white"></div>
                        <div className="h-[1px] w-10 bg-white"></div>
                    </div>
                    <div className="text-white flex w-35 justify-center">payload len {payload_len[type]}</div>
                    <div className="flex items-center">
                        <div className="h-[1px] w-10 bg-white"></div>
                        <div className="h-[10px] w-[1px] bg-white"></div>
                    </div>
                </div>
              </div>
        </Card>
    )
}