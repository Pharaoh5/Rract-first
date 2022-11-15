import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"
import { json } from "stream/consumers"
import { IProduct } from "../models"

export function useProducts() {
	const [products, setproducts] = useState<IProduct[]>([])
	const [loading, setloading] = useState(false)
	const [error, seterror] = useState('')

	const addProduct = (product: IProduct) => {
		const pre = JSON.parse(JSON.stringify(products))
		setproducts(prev => [...pre, product])
	}
	

	async function fetshProducts() {
		try {
		setloading(true)
		const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
		setproducts(response.data)
		setloading(false)
		} catch (e: unknown) {
			const error = e as AxiosError
			setloading(false)
			seterror(error.message)
		}
	}
	
	useEffect(() => {
		fetshProducts()
	}, [])
	return {products, error, loading, addProduct}
}