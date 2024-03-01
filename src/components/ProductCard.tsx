interface ProductCardProps {
  img: string;
  alt: string;
  name: string;
  discountedPrice: number | null;
  regularPrice: number;
  reviews: number;
}

export default function ProductCard({ img, alt, name, discountedPrice, regularPrice, reviews }: ProductCardProps) {
  return (
    <div className='max-w-[350px] flex flex-col gap-4 items-center justify-between'>
      <img className='w-full' src={img} alt={alt} />
      <span className='text-2xl font-semibold font-secondary text-start w-full'>{name}</span>
      <div className='flex justify-between w-full items-center'>
        {discountedPrice ? (
          <div className='flex gap-2'>
            <span className='text-2xl text-gray font-secondary font-extrabold'>R$ {discountedPrice}</span>
            <span className='font-secondary font-bold text-light-gray line-through flex-1 self-end'>R$ {regularPrice}</span>
          </div>
        ) : (
          <div>
            <span className='text-2xl text-gray font-secondary font-extrabold'>R$ {regularPrice}</span>
          </div>
        )}
        <span className='text-lg text-gray font-secondary underline'>{reviews} Reviews</span>
      </div>
      <button className='btn w-full max-w-48'>Comprar</button>
    </div>
  )
}