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

function ContactDetails() {
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
                    <Label htmlFor="sendername">From</Label>
                    <Input type="text" id="sendername" placeholder="Sender's name" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-3 py-2">
                    <Label htmlFor="senderemail">Email</Label>
                    <Input type="email" id="senderemail" placeholder="Email" />
                </div>
            </div>

            <div>

                <div className="grid w-full max-w-sm items-center gap-3 py-2">
                    <h1>To(Client Details)</h1>
                    <Label htmlFor="recieverName">From</Label>
                    <Input type="text" id="recieverName" placeholder="Reciever's name" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-3 py-2">
                    <Label htmlFor="recieveremail">Email</Label>
                    <Input type="email" id="recieveremail" placeholder="Reciever Email" />
                </div>
            </div>

        </CardContent>


        </Card>
    </div>
  )
}

export default ContactDetails