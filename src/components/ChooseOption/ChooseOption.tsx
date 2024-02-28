interface ChooseOptionProps {
  img: string;
  alt: string;
  title: string;
  description: string;
}

export default function ChooseOption({ img, alt, title, description }: ChooseOptionProps) {
  return (
    <div className='flex flex-col gap-4 items-center p-6'>
      <div className='p-4 bg-white rounded-full shadow-[0px_0px_10px_1px_rgba(139,210,160,0.4)]'>
        <img className='w-14' src={img} alt={alt} />
      </div>
      <h3 className='font-bold text-xl text-center'>{title}</h3>
      <p className='text-center font-secondary text-sm'>{description}</p>
    </div>
  )
}