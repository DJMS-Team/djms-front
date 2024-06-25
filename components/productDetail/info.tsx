
import { Product } from '@/interfaces/product.interface'
import Currency from '../ui/currency'
import { Button } from '../ui/button'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/hooks/cart/use-cart'
import { MouseEventHandler } from 'react'
import toast from 'react-hot-toast'
interface InfoProps {
    data: Product
}


export const Info = ({data}: InfoProps) => {

    const cart = useCart()

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = async (event) => {
       event?.stopPropagation()

       const product = cart.items.find((item) => item.id == data.id);
        
        if (product) {
            if (Number(data.quantity) - product.quantity > 0) {
                cart.addItem(data);
            } else {
                toast.error('There is not enough stock')
            }
        } else {
            cart.addItem(data);
        }
    }
    
    return (
        <div>
            <h1 className='text-3xl font-bold text-gray-900'>
                {data.product_name}
            </h1>
            <div className='mt-3 flex items-end justify-between'>
                <p className='text-2xl text-gray-900'>
                    <Currency value={data.price} />
                </p>
            </div>
            <hr className='my-4'/>
            <div className='flex flex-col gap-y-6'>
                <div className='flex items-center gap-x-4'>
                    <h3 className='font-semibold text-black'>
                        Categoria:
                    </h3>
                    <div>
                        {data.product_category.category}
                    </div>
                </div>
            </div>
            <div className='mt-10 flex items-center gap-x-3'>
                <Button onClick={onAddToCart} className='flex items-center gap-x-2'>
                    Añadir al carrito
                    <ShoppingCart />
                </Button>
            </div>
        
        </div>
    )
}