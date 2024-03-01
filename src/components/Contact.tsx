import { TextField } from '@mui/material'
import contactImg from '../assets/contact-img.png'
import contactBackground from '../assets/contact-bg.png'
import butterflyIcon from '../assets/background-icons/butterfly.svg'
import plantIcon from '../assets/background-icons/plant-1.svg'

export default function Contact() {
  return (
    <section className='py-16 px-2 flex flex-col justify-center items-center bg-center bg-no-repeat bg-cover bg-blend-overlay relative' style={{ backgroundImage: `url(${contactBackground})`, backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
      <img className='absolute top-0 w-[8%] -translate-y-1/2 min-w-12 max-w-[175px] left-[10%] opacity-60 z-10' src={butterflyIcon} />
      <img className='absolute top-0 w-[8%] -translate-y-1/2 min-w-12 max-w-[175px] right-[10%] opacity-60 z-10' src={plantIcon} />
      <div className='responsive-container bg-white rounded-2xl flex flex-col-reverse lg:flex-row items-center justify-between max-w-[500px] lg:max-w-[900px] xl:max-w-[1200px]'>
        <img className='rounded-2xl w-full lg:w-4/6 max-w-[550px]' src={contactImg} alt='Bolsa com diversos produtos ecológicos dentro' />
        <div className='flex flex-col gap-8 lg:gap-12 p-8 items-center relative z-20'>
          <div className='flex flex-col gap-4 items-center w-full'>
            <h1 className='text-2xl font-bold text-center'>&quot;Inscreva-se em nossa Newsletter&quot;</h1>
            <p className='font-secondary text-sm font-medium text-center'>Junte-se à nossa comunidade verde e receba ofertas exclusivas e conteúdo esclarecedor diretamente na sua caixa de entrada!</p>
          </div>
          <form className='flex flex-col gap-6 items-center w-full max-w-[480px]' noValidate>
            <TextField className='w-full custom-text-field' id='outlined-basic' label='Insira seu nome' variant='outlined' />
            <TextField className='w-full custom-text-field' id='outlined-basic' label='Insira seu e-mail' variant='outlined' />
            <button className='btn'>Inscrever-se</button>
          </form>
        </div>
      </div>
    </section>
  )
}