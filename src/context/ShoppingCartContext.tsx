import { createContext, useContext, ReactNode } from "react";

interface ShoppingCartProviderProps {
	children: ReactNode;
}

const ShopingCartContext = createContext({});

export function useShoppingCart() {
	return useContext(ShopingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
	return (
		<ShopingCartContext.Provider value={{}}>
			{children}
		</ShopingCartContext.Provider>
	);
}
