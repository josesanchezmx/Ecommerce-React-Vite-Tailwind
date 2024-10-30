const Card = ( data ) => {
    return (
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg shadow-lg'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
                    {data.data.category.name} {/* Nombre de la categoría */}
                </span>
                <img
                    className='w-full h-full object-cover rounded-lg'
                    src={data.data.images[0]} // Primera imagen del producto
                    alt={data.data.title} // Título del producto como alt
                />
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>
                    +
                </div>
            </figure>
            <p className='flex justify-between px-2 pb-2'>
                <span className='text-sm font-light'>{data.data.title}</span>
                <span className='text-lg font-medium'>${data.data.price}</span>
            </p>
        </div>
    );
};

export default Card;
