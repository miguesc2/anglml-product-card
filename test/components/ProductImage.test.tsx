import React from 'react';
import renderer from 'react-test-renderer'
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('debe mostrar el componente correctamente con la imagen personalizada', () => {
    const wrapper = renderer.create(
      <ProductImage className='class-card' img={ product2.img } />
    )
    expect(wrapper.toJSON()).toMatchSnapshot()
  });

  test('Debe mostrar el componente con la imagen del producto', () => { 
    const wrapper = renderer.create(
      <ProductCard product={ product2 }>
        {
          () => (
            <ProductImage />
          )
        }
      </ProductCard>
    )
    expect(wrapper.toJSON()).toMatchSnapshot()      
  });
});
