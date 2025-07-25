import React from 'react'
import { Card,CardHeader,CardTitle,CardContent } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'
function TaxDetails() {
  return (
    <div><Card>
        <CardHeader>
            <CardTitle>
                Tax and Totals
            </CardTitle>
        </CardHeader>
        <CardContent className='grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
                <Label htmlFor='taxRate'>
                    Tax Rate(%)

                </Label>
                <Input id='taxRate' type='number' min="0" max="100" step="0.01"> 
                </Input>
            </div>
            <div className='space-y-2'>
                <div className='flex justify-between'>
                    <span>Subtotal:</span>
                    <span>Rs. 100</span>

                </div>
                <div className='flex justify-between'>
                    <span>Tax(10%)</span>
                    <span>Rs. 32</span>

                </div>
                <div className='flex justify-between font-bold text-lg borer-t pt-2'>
                    <span>Total:</span>
                    <span>Rs. 3211</span>

                </div>
            </div>
        </CardContent>
        
        </Card></div>
  )
}

export default TaxDetails