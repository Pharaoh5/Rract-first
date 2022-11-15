import React, { createContext, useState} from 'react'

interface IModalContext {
	modal: boolean
	open: () => void
	close: () => void
}

export const ModalContext = createContext<IModalContext>({
	modal: false,
	open: () => {},
	close: () => {}
})

export const ModalState = ({children}: {children: React.ReactNode}) => {
	const [modal, setmodal] = useState(false)

	const open = () => setmodal(true)
	const close = () => setmodal(false)

	return (
		<ModalContext.Provider value={{modal, open, close}}>
			{children}
		</ModalContext.Provider>
	)
}