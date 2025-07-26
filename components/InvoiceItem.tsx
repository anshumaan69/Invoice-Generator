import { Label } from '@radix-ui/react-label'
import React from 'react'
import { Input } from './ui/input'

import { Button } from './ui/button'
import { Trash2 } from 'lucide-react'
import type { InvoiceItem as InvoiceItemType } from '@/types/invoice'
import { useInvoice } from '@/context/InvoiceContext'

interface InvoiceItemprops{
    item : InvoiceItemType;
    index:number;
    canRemove:boolean;
}

const InvoiceItem = ({item,index,canRemove}:InvoiceItemprops) => {
    const {invoice,removeItem,updateItem} = useInvoice()

    const handleQuantityChange = (value:string) =>
    {
        if(value ===""){
            updateItem(index,"quantity","")
        }else{
            const numValue = Number.parseInt(value)
            if(!isNaN(numValue) && numValue>=0){

                updateItem(index,"quantity",numValue)
            }
        }
    }

    const handleQuantityBlur = ()=>{
        if(item.quantity === ""||item.quantity===0){
            updateItem(index,"quantity",1)
        }
    }


    const handleRateBlur =()=>{
        if(item.rate ===""){
            updateItem(index,"rate ",0)
        }
    }


    const handleRateChange= (value:string) =>
    {
        if(value ===""){
            updateItem(index,"rate","")
        }else{
            const numValue = Number.parseInt(value)
            if(!isNaN(numValue) && numValue>=0){

                updateItem(index,"rate",numValue)
            }
        }
    }
  return (
    <div
    className='grid grid-cols-12 gap-4 p-4 border rounded-lg'>
        <div className='col-span-5'>
            <Label>Description</Label>
            <Input placeholder="Item Description" value={item.description} onChange={(e)=>updateItem(
                index,"description",e.target.value
  )}></Input>
        </div>
        <div className='col-span-2'>            
            <Label>Quantity</Label>
            <Input type='number' min="1" value={item.quantity} onChange={(e)=>handleQuantityChange(e.target.value)} onBlur = {handleQuantityBlur}></Input>
        </div>
        <div className='col-span-2'>
            <Label>Rate(Rs.)</Label>
            <Input type='number' min="0" step="1" value={item.rate} onChange={(e)=>handleRateChange(e.target.value )} onBlur={handleRateBlur}></Input>
            
        </div>
        <div className='col-span-2'>
            <Label>Amount</Label>
            <div className='h-10 px-3 py-2 bg-gray-50 border rounded-md flex items-center'>
                Rs. {typeof item.amount ==="number" ? item.amount.toFixed(2):"0.00"}
            </div>
        </div>
        <div className='col-span-1 flex items-end'>
            <Button variant ="outline" size ="icon" onClick={()=>removeItem(index)} disabled={!canRemove}>
                <Trash2></Trash2>
            </Button>
        </div>
    </div>
  )
}

export default InvoiceItem