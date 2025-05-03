import { ThemeProvider } from "@/components/theme-provider"
import './App.css'
import { ModeToggle } from "./components/mode-toggle"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState, useEffect } from "react"

import {
  Menubar,
  // MenubarContent,
  // MenubarItem,
  MenubarMenu,
  // MenubarSeparator,
  // MenubarShortcut,
  // MenubarTrigger,
} from "@/components/ui/menubar"

import { Switch } from "@/components/ui/switch"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// import { Container } from "@/components/container"
import { Button } from "./components/ui/button"
import { SmallFrame } from "./components/small_frame"
import { MediumFrame } from "./components/medium_frame"
import { LargeFrame } from "./components/large_frame"
import { Header } from "./components/header"
import { Bullets } from "./components/bullets"

function App() {
  const [maskToggle, toggleMask] = useState(false);
  const [mask, setMask] = useState(0);
  const [size, setSize] = useState('small');
  const [opcode, setOpcode] = useState('0001')

  useEffect(() => {
    setMask(maskToggle ? 1 : 0)
  }, [maskToggle])

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col w-[100%] gap-10">
        <Header />
        <Menubar className="pt-5 pb-5">
          <MenubarMenu>
            <ModeToggle />
            <Button variant="outline" className="" onClick={() => { window.location.replace('https://cse312.com/') }}>Course Website</Button>
          </MenubarMenu>
        </Menubar>
        <div className="flex flex-col gap-50 items-center justify-center content-center">
          <Tabs defaultValue="small" className="w-[1000px] flex justify-center items-center">
            <TabsList className="w-[1000px]">
              <TabsTrigger value="small" onClick={ () => { setSize('small') } }>Small</TabsTrigger>
              <TabsTrigger value="medium" onClick={ () => { setSize('medium') } }>Medium</TabsTrigger>
              <TabsTrigger value="large" onClick={ () => { setSize('large') } }>Large</TabsTrigger>
            </TabsList>
            {/* add radio buttons for different types of frames; add bullet point info */}
            <RadioGroup defaultValue="0001" className="flex flex-row pt-10" onValueChange={ setOpcode }>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="0001" id="option-one" />
                <Label htmlFor="option-one">Text</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="0010" id="binary" />
                <Label htmlFor="binary">Binary</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="0000" id="cont" />
                <Label htmlFor="cont">Continuation Frame</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="1000" id="close" />
                <Label htmlFor="close">Close Frame</Label>
              </div>
            </RadioGroup>
            <Bullets type = {size} mask = {mask} opcode = {opcode} />
            <TabsContent value="small">
              <div className="flex justify-center items-center py-5 gap-5">
                Mask?
                <Switch checked={maskToggle} onCheckedChange={toggleMask} />
              </div>
              <SmallFrame mask = {mask} opcode = {opcode} />
            </TabsContent>
            <TabsContent value="medium">
              <div className="flex justify-center items-center py-5 gap-5">
                Mask?
                <Switch checked={maskToggle} onCheckedChange={toggleMask} />
              </div>
              <MediumFrame mask = {mask} opcode = {opcode} />
            </TabsContent>
            <TabsContent value="large">
              <div className="flex justify-center items-center py-5 gap-5">
                Mask?
                <Switch checked={maskToggle} onCheckedChange={toggleMask} />
              </div>
              <LargeFrame mask = {mask} opcode = {opcode} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
