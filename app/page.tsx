"use client"

import InvoicePreview from "@/components/Invoicepreview";
import { Eye } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import InvoiceForm from "@/components/InvoiceForm";

export default function Home() {
  const [showPreview,setShowPreview]= useState(false)
  if(showPreview){
    return(<InvoicePreview></InvoicePreview>)

  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Invoice Generator</h1>
            <p className="text-gray-600">Create professional invoices quickly</p>
          </div>

        <Button onClick={()=>setShowPreview(true)}>
          <Eye className="w-4 h-4 mr-2">

          </Eye>
            Preview

        </Button>

        </div>
        <InvoiceForm/>
      </div>

    </div>
  );
}
