const ProductCom = ({value})=>{
    
    return (
        <div className="flex m-2 w-10/12 lg:w-3/12 md:w-5/12 shadow-lg p-2 text-center rounded-lg border bg-gray-100">
             <div className="flex flex-col justify-center items-center mx-auto  ">
                <img src={value.imageUrl} alt="image" className=" w-12/12 h-auto shadow-lg rounded-lg border-2"/>
                <div className="flex flex-col m-4 [&>*]:p-2">
                <p>{value.id}</p>
                <p>{value.productName}</p>
                <p>{value.stock}</p>
                <p>{value.country}</p>
                <p>{value.year}</p>
                <p>{value.description}</p>
                </div>
             </div>

        </div>
    )
}

export default ProductCom