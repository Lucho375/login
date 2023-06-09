import Cart from '../../../../domain/entities/cart'

describe('Cart', () => {
  it('should assign properties correctly', () => {
    const cartData = {
      id: 'cart_id',
      user: 'user_id',
      products: ['product1', 'product2']
    }
    const cart = new Cart(cartData)
    expect(cart.id).toEqual(cartData.id)
    expect(cart.user).toEqual(cartData.user)
    expect(cart.products).toEqual(cartData.products)
  })
})
