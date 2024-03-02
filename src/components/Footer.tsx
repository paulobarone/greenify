import logoImg from '../assets/logo.svg'
import phoneIcon from '../assets/icons/phone.svg'
import emailIcon from '../assets/icons/email.svg'
import locationIcon from '../assets/icons/location.svg'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'

export default function Footer() {
  const pagesItems = [
    {
      name: 'Início',
      path: '#home'
    },
    {
      name: 'Loja',
      path: '#shop'
    },
    {
      name: 'Sobre nós',
      path: '#about'
    },
    {
      name: 'Contato',
      path: '#contact'
    }
  ]

  const contactItems = [
    {
      icon: phoneIcon,
      alt: 'Ícone de telefone',
      content: '+91 123456789'
    },
    {
      icon: emailIcon,
      alt: 'Ícone de e-mail',
      content: 'info@greenify.com'
    },
    {
      icon: locationIcon,
      alt: 'Ícone de localização',
      contentFirstLine: '102-Complex, Xyz Road',
      contentSecondLine: 'City name, State, 136458'
    }
  ]

  return (
    <footer className='bg-gray py-16 px-2 flex flex-col justify-center items-center'>
      <div className='responsive-container w-full grid grid-cols-1 justify-items-start gap-8'>
        <div className='inline-block bg-white rounded-lg p-2'>
          <img src={logoImg} alt='Logotipo do Greenify' />
        </div>
        <div className='flex flex-col gap-12 w-full'>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-5'>
              <span className='text-xl text-white font-bold font-secondary md:text-2xl md:font-extrabold'>Páginas</span>
              <div className='flex gap-6 flex-wrap md:gap-20'>
                {pagesItems.map((item, index) => (
                  <a className='text-sm text-white font-semibold font-secondary hover-link-animation md:text-xl' href={item.path} key={index}>{item.name}</a>
                ))}
              </div>
            </div>
            <div className='flex flex-col gap-5 md:hidden'>
              <span className='text-xl text-white font-bold font-secondary'>Contato</span>
              <div className='flex flex-col gap-2'>
                {contactItems.map((item, index) => (
                  <div className='flex gap-6 items-center' key={index}>
                    <img className='w-5 h-5' src={item.icon} alt={item.alt} />
                    {item.contentSecondLine ? 
                      <span className='font-secondary font-bold text-white md:font-extrabold md:text-2xl'>{item.contentFirstLine} <br /> {item.contentSecondLine}</span>
                    : 
                      <span className='font-secondary font-bold text-white md:font-extrabold md:text-2xl'>{item.content}</span>
                    }
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-12 w-full md:flex-row md:justify-between md:items-center'>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-5'>
                <FacebookIcon className='hover:text-primary-green cursor-pointer text-white' style={{ fontSize: '28px' }}/>
                <InstagramIcon className='hover:text-primary-green cursor-pointer text-white' style={{ fontSize: '28px' }}/>
                <LinkedInIcon className='hover:text-primary-green cursor-pointer text-white' style={{ fontSize: '28px' }}/>
                <TwitterIcon className='hover:text-primary-green cursor-pointer text-white' style={{ fontSize: '28px' }}/>
              </div>
              <div className='flex flex-col gap-2'>
                <span className='font-secondary text-white'>termos & serviços</span>
                <span className='font-secondary text-white'>Greenify @ todos os direitos reservados 2024</span>
              </div>
            </div>

            <div className='hidden flex-col gap-5 md:flex'>
              <span className='text-xl text-white font-bold font-secondary'>Contato</span>
              <div className='flex flex-col gap-2'>
                {contactItems.map((item, index) => (
                  <div className='flex gap-6 items-center' key={index}>
                    <img className='w-5 h-5' src={item.icon} alt={item.alt} />
                    {item.contentSecondLine ? 
                      <span className='font-secondary font-bold text-white md:font-extrabold md:text-2xl'>{item.contentFirstLine} <br /> {item.contentSecondLine}</span>
                    : 
                      <span className='font-secondary font-bold text-white md:font-extrabold md:text-2xl'>{item.content}</span>
                    }
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}