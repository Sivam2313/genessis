import React, { useState } from 'react'

const TransactionTable = () => {
    const [data, setData] = useState([
        {
            source: "Bought",
            amount : 100,
            date: "2020-01-01",
        },
        {
            source: "Sold",
            amount : -50,
            date: "2020-01-01",
        }
    ])
    const headings = [
        'Source',
        'Date',
        'Amount',
    ]
  return (
    <table className="table-auto rounded-xl w-11/12 mt-20 border border-primary overflow-hidden">
      <thead className='rounded bg-surface text-onSurface'>
        <tr className='rounded'>
        {
            headings.map((heading, index) => {
                return <th key={index} className="p-4">{heading}</th>
            })
        }
        </tr>
      </thead>
      <tbody className='divide-y'>
        {
            data.map((row, index) => {
                return (
                    <tr key={index} className='rounded-xl'>
                        <td className="p-4">{row.source}</td>
                        <td className="p-4">{row.date}</td>
                        <td className="p-4">{row.amount}</td>
                    </tr>
                )
            })
        }
      </tbody>
    </table>
  );
}

export default TransactionTable