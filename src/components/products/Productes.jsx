import React from 'react';
import ProductItem from './ProductItem'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ProductList } from '../../Models/ProductList';
export function Productes() {
  return (
    <div className='bg-light text-center' p-5>
      <div className='container'>
        <h1>Our Product</h1>
        <div className='row'>
          {ProductList.map((product, index,) => {
            return (

              <div className='col-sm-4 m-2' key= {product.id}>
                <Card style={{ width: '18rem' }}>
                  {/* <Card.Img variant="top" src='./test1' /> */}
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <p>{product.price}</p>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>



              </div>
            )
          }
          )}
        </div>
      </div>
    </div>

  )
}
