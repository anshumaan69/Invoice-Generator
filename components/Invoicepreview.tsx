import React from 'react'
import { Button } from './ui/button'
import { Download } from 'lucide-react'
import { Card,CardContent } from './ui/card'


function Invoicepreview() {
  return (
    <div className='min-h-screen bg-gray-50 p-4'>
      <div className="max-width-4xl mx-auto ">
        <div className='flex justify-between items-center mb-6'>
          <h1 className='text-2xl font-bold'>
            Invoice Preview
          </h1>
            <div className="space-x-2">
              <Button variant="outline" >Back to edit</Button>
              <Button>
                <Download className='w-4 h-4 mr-2'></Download>
                Download PDF
              </Button>
            </div>
        </div>
        <Card>
          <CardContent className="p-8">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  INVOICE
                  
                </h2>
                <p className='text-gray-600'>
                  #234567899
                </p>
              </div>
              <div className="text-right ">
                <p className='text-sm text-gray-600'>
                  Date : 12/32/28

                </p>
              </div>

            </div>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold mb-2">From:</h3>
                <p className="font-medium">test</p>
                <p className="text-gray-600">test@gmail.com</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">To:</h3>
                <p className="font-medium">John Doe</p>
                <p className="text-gray-600">john@gmail.com</p>
              </div>
            </div>



                {/* Items Table */}
            <table className="w-full mb-8">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left py-2">Description</th>
                  <th className="text-center py-2">Qty</th>
                  <th className="text-right py-2">Rate</th>
                  <th className="text-right py-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-2">{item.description}</td>
                    <td className="py-2 text-center">{item.quantity}</td>
                    <td className="py-2 text-right">
                      $
                      {typeof item.rate === "number"
                        ? item.rate.toFixed(2)
                        : "0.00"}
                    </td>
                    <td className="py-2 text-right">
                      $
                      {typeof item.amount === "number"
                        ? item.amount.toFixed(2)
                        : "0.00"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>





            {/* Totals */}
            <div className="flex justify-end">
              <div className="w-64 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>Rs. 2132</span>
                </div>
                <div className="flex justify-between">
                  <span>
                    Tax(10%):
                  </span>
                  <span>Rs. 99</span>
                </div>x
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Total:</span>
                  <span>Rs. 99</span>
                </div>
              </div>
            </div>



            

          </CardContent>

        </Card>

        
      
      </div>


    </div>
  )
}

export default Invoicepreview