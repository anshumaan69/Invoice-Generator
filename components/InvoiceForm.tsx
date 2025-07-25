import React from 'react'
import BasicDetails from "./BasicDetails.tsx"
import ContactDetails from "./ContactDetails.tsx"
import ItemsList from "./ItemsList.tsx"

function InvoiceForm() {
  return (
    <div className='space-y-6'>InvoiceForm
        <BasicDetails>

        </BasicDetails>
        <ContactDetails></ContactDetails>
        <ItemsList></ItemsList>
    </div>

  )
}

export default InvoiceForm