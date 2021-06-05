import { FC } from 'react'
import Button from '@material-ui/core/Button'

import { Wrapper } from './Item.styles'

import { CartItemType } from '../../App'

type Props = {
    item: CartItemType
    handleAddToCart: (clickedItem: CartItemType) => void
}

const Item: FC<Props> = ({ item, handleAddToCart }) => {
    return (
        <Wrapper>
            <img src={item.image} alt={item.title} />
            <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h3>${item.price}</h3>
            </div>
            <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
        </Wrapper>
    )
}

export default Item
