import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import {Product} from '@/interfaces/product.interface'
import toast from 'react-hot-toast'

interface CarStore{
    items: Product[]
    addItem: (data: Product) => void
    removeItem: (id: string) => void
    removeAll: () => void
}

export const useCart = create(
    persist<CarStore>((set, get)=>({
        items: [],
        addItem: (data: Product) => {
            const currentItem = get().items
            const existingItem = currentItem.find((item) => item.id === data.id)

            if(existingItem){
                return toast('Product already in cart', { icon: '🛒' })
            }

            set({ items: [...get().items, data]})
            toast.success('Product added to cart', { icon: '🛒' })
        },
        removeItem: (id: string) => {
            set({items: [...get().items.filter((item) => item.id !== id)]})
            toast.success('Product removed from cart', { icon: '🛒' })
        },
        removeAll: () => set({ items: [] }),
        
    }), {
        name: 'cart-storage',
        storage: createJSONStorage(()=>localStorage)
    })
)
