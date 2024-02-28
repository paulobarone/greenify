import Header from '../../components/Header'
import homeImg from '../../assets/home-img.png'
import butterflyIcon from '../../assets/background-icons/butterfly.svg'
import bulbIcon from '../../assets/background-icons/bulb.svg'
import plantIcon from '../../assets/background-icons/plant-2.svg'
import ChooseOption from '../../components/ChooseOption'
import { chooseOptions } from '../../data/chooseOptions'
import { products } from '../../data/products'
import ProductCard from '../../components/ProductCard'

export default function Home() {
  return (
    <>
      <Header />
      <section className='py-6 px-2 flex flex-col justify-center items-center relative'>
        <div className='responsive-container flex flex-col items-center gap-8'>
          <div className='flex flex-col items-center gap-2'>
            <div className='flex flex-col items-center'>
              <h1 className='text-2xl font-bold'>Bem-vindo ao Greenify</h1>
              <span className='text-2xl'>Seu destino de</span>
              <h2 className='text-2xl font-bold text-primary-green'>Compras Sustentáveis</h2>
            </div>
            <p className='text-sm text-center font-secondary'>&quot;Descubra a Sustentabilidade. Abraçe o Greenify. <br /> Seu Refúgio Eco-amigável para Compras Conscientes.&quot;</p>
            <a className='btn' href='#'>Ver Loja</a>
          </div>
          <img className='translate-x-1/4 sm:translate-x-1/2 sm:max-w-lg' src={homeImg} alt='Sacola sustentável' />

          <img className='absolute top-44 right-[10%] w-[10%] max-w-24 -z-10' src={butterflyIcon} />
          <img className='absolute top-60 left-[20%] w-[8%] max-w-12 opacity-60 -z-10' src={butterflyIcon} />
          <img className='absolute bottom-16 left-[10%] w-[15%] max-w-36 -z-10' src={bulbIcon} />

          <div className='w-2/5 max-w-60 h-1 bg-zinc-500 rounded-lg'></div>
        </div>
      </section>
      <section className='py-6 px-2 flex flex-col justify-center items-center'>
        <div className='responsive-container flex flex-col items-center gap-8'>
          <h2 className='text-gray text-2xl font-bold text-center'>Por que escolher o Greenify?</h2>
          <div className='grid grid-cols-1 gap-8'>
            {chooseOptions.map((item, index) => (
              <ChooseOption img={item.img} alt={item.alt} title={item.title} description={item.description} key={index} />
            ))}
          </div>
        </div>
      </section>
      <section className='py-6 px-2 flex flex-col justify-center items-center relative'>
        <img className='absolute -top-10 right-[10%] translate-x-1/2 -z-10 min-w-56 w-[25%] max-w-[300px]' src={plantIcon} />
        <div className='responsive-container flex flex-col items-center gap-8'>
          <h2 className='text-gray text-2xl font-bold text-center'>Nossos Produtos Sustentáveis Mais Vendidos</h2>
          <div className='grid grid-cols-1 gap-12'>
            {products.map((item, index) => (
              <ProductCard img={item.img} alt={item.alt} name={item.name} regularPrice={item.regularPrice} discountedPrice={item.discountedPrice} reviews={item.reviews} key={index} />
            ))}
          </div>
        </div>
        <img className='absolute -bottom-28 left-[10%] -translate-x-1/2 -z-10 min-w-56 w-[25%] max-w-[300px] rotate-45' src={plantIcon} />
      </section>
    </>
  )
}