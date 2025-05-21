import React from 'react'

const FakeApiCard = (props) => { 
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
                data?.map((result) => (
                    <div key={id}>
                        <img src={ `${ImageUrl}`} alt="" />
                        <p>{title}</p>
                        <p>{price}</p>
                        <p>{description}</p>
                        <p>{category}</p>
                    </div>
                ))    
            }
        </div>
    )


}
export default FakeApiCard
