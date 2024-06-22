import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { Product } from '@/interfaces/product.interface'
import toast from 'react-hot-toast'

interface CartItem extends Product {
    quantity: number;
}

interface CartStore {
    items: CartItem[];
    addItem: (data: Product) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;
    incrementQuantity: (id: string) => void;
    decrementQuantity: (id: string) => void;
}

export const useCart = create(
    persist<CartStore>((set, get) => ({
        items: [],
        addItem: (data: Product) => {
            const currentItems = get().items;
            const existingItem = currentItems.find((item) => item.id === data.id);

            if (existingItem) {
                set({
                    items: currentItems.map(item =>
                        item.id === data.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                });
                return toast('Quantity updated', { icon: '🛒' });
            }

            set({ items: [...get().items, { ...data, quantity: 1 }] });
            toast.success('Product added to cart', { icon: '🛒' });
        },
        removeItem: (id: string) => {
            set({ items: [...get().items.filter((item) => item.id !== id)] });
            toast.success('Product removed from cart', { icon: '🛒' });
        },
        removeAll: () => set({ items: [] }),
        incrementQuantity: (id: string) => {
            set({
                items: get().items.map(item =>
                    item.id === id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            });
        },
        decrementQuantity: (id: string) => {
            const currentItems = get().items;
            const itemToDecrement = currentItems.find((item) => item.id === id);

            if (itemToDecrement && itemToDecrement.quantity > 1) {
                set({
                    items: currentItems.map(item =>
                        item.id === id
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    )
                });
            } else {
                set({ items: [...currentItems.filter((item) => item.id !== id)] });
                toast.success('Product removed from cart', { icon: '🛒' });
            }
        }
    }), {
        name: 'cart-storage',
        storage: createJSONStorage(() => localStorage)
    })
);