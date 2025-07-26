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
import { useInvoice } from '@/context/InvoiceContext'

function ContactDetails() {
    const {invoice,updateInvoice}=useInvoice()
  return (
    <div>
        <Card>
        <CardHeader>
            <CardTitle>From & To</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4" >
            <div>
                <div className="grid w-full max-w-sm items-center gap-3 py-2">
                    <h1>From(Your Details)</h1>
                    <Label htmlFor="fromName">From</Label>
                    <Input type="text" id="fromName" placeholder="Sender's name" value={invoice.fromName} onChange={(e)=>updateInvoice({fromName:e.target.value})}/>
                </div>
                <div className="grid w-full max-w-sm items-center gap-3 py-2">
                    <Label htmlFor="fromEmail">Email</Label>
                    <Input type="email" id="fromEmail" placeholder="Email" value={invoice.fromEmail} onChange={(e)=>updateInvoice({fromEmail:e.target.value})}/>
                </div>
            </div>

            <div>

                <div className="grid w-full max-w-sm items-center gap-3 py-2">
                    <h1>To(Client Details)</h1>
                    <Label htmlFor="toName">From</Label>
                    <Input type="text" id="toName" placeholder="Reciever's name" value={invoice.toName} onChange={(e)=>updateInvoice({toName:e.target.value})} />
                </div>
                <div className="grid w-full max-w-sm items-center gap-3 py-2">
                    <Label htmlFor="toEmail">Email</Label>
                    <Input type="email" id="toEmail" placeholder="Reciever Email" value={invoice.toEmail} onChange={(e)=>updateInvoice({toEmail:e.target.value})}/>
                </div>
            </div>

        </CardContent>


        </Card>
    </div>
  )
}

export default ContactDetails