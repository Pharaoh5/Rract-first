import axios from 'axios'
import React, { useState } from 'react'
import { IProduct } from '../models'
import ErrorMessage from './ErrorMessage'

const productData: IProduct = {
	title: 'test product',
	price: 13.5,
	description: 'lorem ipsum set',
	image: 'https://i.pravatar.cc',
	category: 'electronic',
	rating: {
		rate: 42,
		count:10
	}
}

interface CreateProductProps {
	onCreate: (product:IProduct)=> void
}

const CreateProduct = ({onCreate}: CreateProductProps) => {
	const [value, setvalue] = useState('')
	const [error, seterror] = useState('')

	const submitHandler = (event:React.FormEvent)=> {
		seterror('')
		event.preventDefault()
		if (value.trim().length === 0) {
			seterror('Please enter valid title')
			return
		}

		productData.title = value
		const productDataLast = JSON.parse(JSON.stringify(productData))
		const response = axios.post<IProduct>('https://fakestoreapi.com/products', productDataLast)
		onCreate(productDataLast)
		
	}

	const changeHadler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setvalue(event.target.value)
	}

  return (
	 <form onSubmit={submitHandler}>
		<input
		type="text"
		className='border py-2 px-4 mb-2 w-full outline-0'
		placeholder='Enter product title'
		value={value}
		onChange={changeHadler}
		/>

		{error && <ErrorMessage error={error}/>}

		<button
		type='submit'
		className='py-2 px-4 border bg-yellow-400 hover:text-white'
		>
			Create
		</button>
	 </form>
  )
}

export default CreateProduct