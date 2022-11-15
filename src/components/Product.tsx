import React, { useState } from 'react'
import { IProduct } from '../models'

interface ProductProps {
	product: IProduct
}

const Product = ({product}: ProductProps) => {
	const [details, setdetails] = useState(false)

	const bgButton= details ? 'bg-blue-400': 'bg-yellow-400'

	const classButton = ['py-2 px-4 border', bgButton]

  return (
	 <div
	 className='border py-2 px-2 rounded flex flex-col items-center mb-2'
	 >
		<img src={product.image} className='w-1/6' alt={product.title} />
		<p>{product.title}</p>
		<p className='font-bold'>{product.price}</p>
		<button
		className={classButton.join(' ')}
		onClick={(()=>setdetails(prev=>!prev))}
		>
			{details ? 'Hide Details': 'Show Details'}
		</button>
		{details && 
		<div>
			<p>{product.description}</p>
			<p>Rate: <span style={{ fontWeight: 'bold'}}>{product.rating?.rate}</span></p>
		</div>}
	 </div>
  )
}

export default Product
