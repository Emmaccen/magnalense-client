
import React from 'react'

export default function moneyFormat(amountCents) {
  return (
    <>
      `$${(amountCents / 100).toFixed(2)}`
    </>
  )
}
