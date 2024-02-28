import Header from '../../components/Header/Header'
import homeImg from '../../assets/home-img.png'
import butterflyIcon from '../../assets/background-icons/butterfly.svg'
import bulbIcon from '../../assets/background-icons/bulb.svg'
import ChooseOption from '../../components/ChooseOption/ChooseOption'
import { chooseOptions } from '../../data/chooseOptions'

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
            <a className='btn' href='#'>Shop Now</a>
          </div>
          <img className='translate-x-1/4 sm:translate-x-1/2 sm:max-w-lg' src={homeImg} alt='Sacola sustentável' />

          <img className='absolute top-52 right-8 w-10' src={butterflyIcon} />
          <img className='absolute top-60 left-10 w-8 opacity-60' src={butterflyIcon} />
          <img className='absolute bottom-16 left-4 w-16' src={bulbIcon} />

          <div className='w-2/5 max-w-60 h-1 bg-zinc-500 rounded-lg'></div>
        </div>
      </section>
      <section className='py-6 px-2 flex flex-col justify-center items-center'>
        <div className='responsive-container flex flex-col items-center gap-8'>
          <h2 className='text-gray text-2xl font-bold text-center'>Por que escolher o Greenify?</h2>
          <div className='grid grid-cols-1'>
            {chooseOptions.map((item, index) => (
              <ChooseOption img={item.img} alt={item.alt} title={item.title} description={item.description} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}