import { Label } from '@radix-ui/react-label'
import React from 'react'
import { Input } from './ui/input'

import { Button } from './ui/button'
import { Trash2 } from 'lucide-react'

const InvoiceItem = () => {
  return (
    <div
    className='grid grid-cols-12 gap-4 p-4 border rounded-lg'>
        <div className='col-span-5'>
            <Label>Description</Label>
            <Input placeholder="Item Description"></Input>
        </div>
        <div className='col-span-2'>            
            <Label>Quantity</Label>
            <Input type='number' min="1"></Input>
        </div>
        <div className='col-span-2'>
            <Label>Rate(Rs.)</Label>
            <Input type='number' min="0" step="1"></Input>
            
        </div>
        <div className='col-span-2'>
            <Label>Amount</Label>
            <div className='h-10 px-3 py-2 bg-gray-50 border rounded-md flex items-center'>
                Rs. 0
            </div>
        </div>
        <div className='col-span-1 flex items-end'>
            <Button variant ="outline" size ="icon">
                <Trash2></Trash2>
            </Button>
        </div>
    </div>
  )
}

export default InvoiceItem