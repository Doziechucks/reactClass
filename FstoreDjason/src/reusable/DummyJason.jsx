import React from 'react'

const DummyJason = (props) => {
    const { data, isLoading } = props.data
    console.log(data)

    if (isLoading) {
        return (
            <div>loading....</div>
        )
    }

    return (
        <div>
            {
                data?.products.map((product) => (
                    <div key={product.id}>
                        <img src={ `${product.image}`} alt="" />
                        <p>{product.overview}</p>
                        <p>{product.title}</p>
                        <p>{product.vote_count}</p>
                        <p>{product.vote_average}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default DummyJason