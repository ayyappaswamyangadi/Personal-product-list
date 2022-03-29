import React from 'react'
import {View} from './View'
import {Link} from 'react-router-dom'

export const ProductList = (props) => {
    return (
      <div>
        <div className='itemWrapper'>
        <h1 className='itemHeader'>Product List</h1>
      <Link className="navButton add-item" to="/add-item">
          + Add Item
        </Link>
        </div>
        
      <div className="view-container">
        {props.Items.length > 0 && 
          <>
              <table className="table">
                <thead>
                  <tr>
                    <th scope='col'>Title</th>
                    <th scope='col'>Quantity</th>
                    <th scope='col'>Price</th>
                    <th scope='col'>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <View Items={props.Items}  deleteItem={props.deleteItem}/>
                </tbody>
              </table>
              <div className='d-grid'>
            <button
              className="btn btn-danger btn-lg"
              onClick={() => props.setItems([])}
            >
              Remove All
            </button>
            </div>

          </>
        }
        {props.Items.length < 1 && <div>Add Items to display your product List here!!</div>}
      </div>
      </div>
    )
  }

export default ProductList