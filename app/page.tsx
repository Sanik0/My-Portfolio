"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import LiquidEther from "@/components/LiquidEther"


export default function home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="w-full">
      <div className="w-full h-[100vh]">
        <LiquidEther />
      </div>
    </div>



  )
}
