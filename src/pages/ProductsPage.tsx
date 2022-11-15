import React, { useContext } from 'react'
import CreateProduct from '../components/CreateProduct'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import Modal from '../components/Modal'
import Product from '../components/Product'
import { ModalContext } from '../context/ModalContext'
import { useProducts } from '../hooks/products'
import { IProduct } from '../models'

const ProductsPage = () => {
  	const{loading, products, error,addProduct} = useProducts()
	const {modal, open, close} = useContext(ModalContext)

	const createHandler = (product: IProduct) => {
		close()
		addProduct(product)
	}
	
	return (
		<div className='container'>
			{loading && <Loader/>}
			{error && <ErrorMessage error={error}/>}
			{products.map(product => <Product key={product.id} product={product}></Product>)}
			{modal &&
			<Modal
			onClose={close}
			title='Create new product'
			>
				<CreateProduct onCreate={createHandler}/>
			</Modal>}
			<button
			className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'
			onClick={open}
			>
				+
			</button>
		</div>
	);
}

export default ProductsPage
