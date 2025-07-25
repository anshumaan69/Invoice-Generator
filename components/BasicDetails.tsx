import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function BasicDetails() {
  return (
    <div>
        <Card>
        <CardHeader>
            <CardTitle>Invoice details</CardTitle>

        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div >
            <Label htmlFor="invoiceno" className='p-2'>Invoice no.</Label>
            <Input type="text" id="invoiceno" placeholder="Invoice no." />
            </div>


            <div>
            <Label htmlFor="date" className='p-2'>Date</Label>
            <Input type="date" id="date" placeholder="Date" />
            </div> 
        </CardContent>

        </Card>
    </div>
  )
}

export default BasicDetails