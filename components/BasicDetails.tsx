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
import { useInvoice } from '@/context/InvoiceContext';

function BasicDetails() {
    const {invoice,updateInvoice} = useInvoice();
    // console.log(data)

  return (
    <div>
        <Card>
        <CardHeader>
            <CardTitle>Invoice details</CardTitle>

        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div >
            <Label htmlFor="invoiceNumber" className='p-2'>Invoice no.</Label>
            <Input value={invoice.invoiceNumber} type="text" id="invoiceNumber" placeholder="invoiceNumber" onChange={(e)=>updateInvoice({invoiceNumber:e.target.value})}  />
            </div>


            <div>
            <Label htmlFor="date" className='p-2'>Date</Label>
            <Input type="date" id="date" placeholder="Date" value={invoice.date}  onChange={(e)=>updateInvoice({date:e.target.value})}/>
            </div> 
        </CardContent>

        </Card>
    </div>
  )
}

export default BasicDetails