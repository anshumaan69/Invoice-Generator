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
import { Button } from './ui/button'
import { Plus } from 'lucide-react'
import InvoiceItem from './InvoiceItem'
import { useInvoice } from '@/context/InvoiceContext'

// Demo data used just for ui purposes now we will be using context api
// export const items=[{
//     id : "1",
//     description:"Website Design",
//     quantity:1,
//     rate : 120,
//     amount:120
// },
// {
//     id : "2",
//     description:"Hosting (12 months)",
//     quantity:1,
//     rate : 500,
//     amount:500
// }
// ]

function ItemsList() {

    const {invoice , addItem}= useInvoice()
        // function addItem(){
        //     console.log("Have fun")
        // }
    return (
        
        <Card>
    <CardHeader className='flex flex-row items-center justify-between'>
        <CardTitle>Invoice Items</CardTitle>
        <Button onClick={addItem} size="sm">
            <Plus className='w-4 h-4 mr-2'></Plus>
            Add Item
        </Button>

    </CardHeader>
    <CardContent className='space-y-4'>
        {invoice.items.map((item,index)=>(
            <InvoiceItem key={item.id}
            item={item}
            index={index}
            canRemove={invoice.items.length>1}/>
        ))}

    </CardContent>

    </Card>

  )
}

export default ItemsList