import React from 'react'
import { Card,CardHeader,CardTitle,CardContent } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { useInvoice } from '@/context/InvoiceContext'
function TaxDetails() {
    const {invoice,updateInvoice }=useInvoice()


    const handleTaxRateChange = (value:string)=>{
        if(value == ""){
            updateInvoice({taxRate:""})
        }
        else{
            const numValue = Number.parseFloat(value)
            if(!isNaN(numValue) && numValue>=0 && numValue<=100){
                updateInvoice({taxRate:numValue})
            }
        }

    }


    const handleTaxRateBlur = ()=>{
        if(invoice.taxRate==""  || isNaN(Number(invoice.taxRate))){
            updateInvoice  ({taxRate:0})

        }
    }
    
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
                <Input id='taxRate' type='number' min="0" max="100" step="0.01" 
                value ={invoice.taxRate}
                // onChange={handleTaxRateChange(e.target.value)}
                //You're calling handleTaxRateChange immediately (and passing e.target.value), but onChange expects a function (specifically a ChangeEventHandler<HTMLInputElement>), not the result of a function call (which is void in this case).
                onChange={(e)=>handleTaxRateChange(e.target.value)}
                onBlur={handleTaxRateBlur}> 
                </Input>
            </div>
            <div className='space-y-2'>
                <div className='flex justify-between'>
                    <span>Subtotal:</span>
                    <span>Rs.{invoice.subTotal.toFixed(2)}</span>

                </div>
                <div className='flex justify-between'>

                    <span>
                        Tax ({typeof invoice.taxRate ==="number"? invoice.taxRate:0})%
                    </span>
                    




                    <span>
                        Rs. {(invoice.taxAmount.toFixed(2))}
                    </span>

                </div>
                <div className='flex justify-between font-bold text-lg borer-t pt-2'>
                    <span>Total:</span>
                    <span>Rs. {(invoice.total.toFixed(2))}</span>

                </div>
            </div>
        </CardContent>
        
        </Card></div>
  )
}

export default TaxDetails