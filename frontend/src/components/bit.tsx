import {
    Card,
    CardContent,
    // CardDescription,
    // CardFooter,
    // CardHeader,
    // CardTitle,
  } from "@/components/ui/card"

export function Bit(props: any) {
    const label = props.label
    const value = props.value
    const type = props.type
    let array = ["< 126", "126", "127"]
    let hidden = label === 0 && array.includes(type) ? "" : " hidden"
    const bit: any = {
        0 : "Fin",
        1 : "RSV1",
        2 : "RSV2",
        3 : "RSV3"
    }

    return (
        <>
            <div className="flex flex-col text-white">
                {label}
                <Card className={"w-10 shadow-none px-0 items-center bg-white text-black"}>
                    <CardContent>
                        {value}
                    </CardContent>
                </Card>
                { type === "first" ?
                    (
                        <div className={"mt-5 rotate-270 text-right"}>
                            {bit[label]}
                        </div>
                    ) : (
                        <div className={"mt-5 rotate-270 text-right" + hidden}>
                            Mask
                        </div>
                    ) }
                
            </div>
        </>
    )
}