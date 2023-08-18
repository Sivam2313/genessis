import React, { useState } from 'react'
import productImage from '../../assets/productGrid.jpg'
const ListProducts = () => {
    const [products, setProducts] = useState([
        {id: 1, name: 'Product 1', amountAssigned: 500, sale:20, tokensLeft:300},
    ])
    const headings = ['Product Name', 'Amount Assigned', 'Sale', 'Tokens Left'];
  return (
    <div>
      <table className="table-auto rounded-xl w-11/12 mt-20">
        <thead className="rounded bg-primary text-onPrimary">
          <tr className="rounded">
            {headings.map((heading, index) => {
              return (
                <th key={index} className="p-4">
                  {heading}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="divide-y">
          {products.map((row, index) => {
            return (
              <tr key={index} className="bg-primaryContainer text-primaryText">
                <td className="p-4">{row.name}</td>
                <td className="p-4">{row.amountAssigned}</td>
                <td className="p-4">{row.sale}</td>
                <td className="p-4">{row.tokensLeft}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListProducts