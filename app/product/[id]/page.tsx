import React from 'react'



function Products({params}: {params: {id: number}}) {
   
  return (
    <div>Products {params.id}</div>
  )
}

export default Products