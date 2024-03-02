import contactImg from '../assets/contact-img.png'
import contactBackground from '../assets/contact-bg.png'
import butterflyIcon from '../assets/background-icons/butterfly.svg'
import plantIcon from '../assets/background-icons/plant-1.svg'
import planetIcon from '../assets/background-icons/planet.svg'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Alert from '@mui/material/Alert'
import { useEffect, useState } from 'react'

const subscribeSchema = z.object({
  name: z.string()
    .min(1, 'O nome é obrigatório'),
  email: z.string()
    .min(1, 'O e-mail é obrigatório')
    .email('Formato de e-mail inválido')
})

type SubscribeSchema = z.infer<typeof subscribeSchema>

export default function Contact() {
  const [alert, setAlert] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<SubscribeSchema>({
    resolver: zodResolver(subscribeSchema)
  })

  const sendMessage = () => {
    setAlert(true)
    reset()
  }

  useEffect(() => {
    if(alert) {
      setTimeout(() => {
        setAlert(false)
      }, 3000)
    }
  }, [alert])

  return (
    <section id='contact' className='py-16 px-2 flex flex-col justify-center items-center bg-center bg-no-repeat bg-cover bg-blend-overlay relative' style={{ backgroundImage: `url(${contactBackground})`, backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
      {alert &&
        <Alert className='fixed top-10 z-30 animate-bounce' severity='success'>Inscrito com sucesso!</Alert>
      }
      <img className='absolute top-0 w-[8%] -translate-y-1/2 min-w-12 max-w-[175px] brightness-150 left-[10%] z-10' src={butterflyIcon} />
      <img className='absolute top-0 w-[8%] -translate-y-1/2 min-w-12 max-w-[175px] brightness-75 right-[10%] z-10' src={plantIcon} />
      <div className='responsive-container bg-white rounded-2xl flex flex-col-reverse lg:flex-row items-center justify-between max-w-[500px] lg:max-w-[900px] xl:max-w-[1200px] z-20'>
        <img className='rounded-2xl w-full lg:max-w-[500px] lg:w-4/6 xl:max-w-[550px]' src={contactImg} alt='Bolsa com diversos produtos ecológicos dentro' />
        <div className='flex flex-col gap-8 lg:gap-12 p-8 items-center relative z-20'>
          <div className='flex flex-col gap-4 items-center w-full'>
            <h1 className='text-2xl font-bold text-center'>&quot;Inscreva-se em nossa Newsletter&quot;</h1>
            <p className='font-secondary text-sm font-medium text-center'>Junte-se à nossa comunidade verde e receba ofertas exclusivas e conteúdo esclarecedor diretamente na sua caixa de entrada!</p>
          </div>
          <form className='flex flex-col gap-6 items-center w-full max-w-[480px]' onSubmit={handleSubmit(sendMessage)} noValidate>
            <div className='relative w-2/3'>
              <input type='text' id='name' placeholder=' ' className='peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-green-500' {...register('name')} autoComplete='off' />
              <label htmlFor='name' className='absolute left-0 -top-3.5 text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-green-500 transition-all'>Nome</label>
              {errors.name?.message && <span className='text-red-500 text-sm'>{errors.name.message}</span>}
            </div>
            <div className='relative w-2/3'>
              <input type='email' id='email' placeholder=' ' className='peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-green-500' {...register('email')} autoComplete='off' />
              <label htmlFor='email' className='absolute left-0 -top-3.5 text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-green-500 transition-all'>E-mail</label>
              {errors.email?.message && <span className='text-red-500 text-sm'>{errors.email.message}</span>}
            </div>
            <button className='btn'>Inscrever-se</button>
          </form>
        </div>
      </div>
      <img className='absolute bottom-10 rotate-[110deg] w-[8%] translate-y-1/2 min-w-12 max-w-[175px] brightness-75 left-[10%] z-10' src={plantIcon} />
      <img className='absolute -bottom-20 w-[50%] animate-spin-slow min-w-12 max-w-[220px] brightness-150 right-[5%] z-10' src={planetIcon} />
    </section>
  )
}