import Header from '../../components/Header'
import logoIcon from '../../assets/logo.svg'
import homeImg from '../../assets/home-img.png'
import butterflyIcon from '../../assets/background-icons/butterfly.svg'
import bulbIcon from '../../assets/background-icons/bulb.svg'
import plantIcon from '../../assets/background-icons/plant-2.svg'
import aboutBackground from '../../assets/about-bg.png'
import ChooseOption from '../../components/ChooseOption'
import ProductCard from '../../components/ProductCard'
import { chooseOptions } from '../../data/chooseOptions'
import { products } from '../../data/products'
import { blogs } from '../../data/blogs'
import Reviews from '../../components/Reviews'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <section className='py-6 px-2 flex flex-col justify-center items-center relative'>
        <div className='responsive-container flex flex-col items-center gap-8 w-full lg:flex-row lg:justify-between'>
          <div className='flex flex-col items-center gap-4 md:gap-8 w-full'>
            <div className='flex flex-col items-center w-full gap-2'>
              <h1 className='text-2xl font-bold md:text-5xl'>Bem-vindo ao Greenify</h1>
              <span className='text-2xl md:text-4xl'>Seu destino de</span>
              <h2 className='text-2xl md:text-5xl font-bold text-primary-green'>Compras Sustentáveis</h2>
            </div>
            <p className='text-sm text-center font-secondary'>&quot;Descubra a Sustentabilidade. Abraçe o Greenify. <br /> Seu Refúgio Eco-amigável para Compras Conscientes.&quot;</p>
            <a className='btn' href='#'>Ver Loja</a>
          </div>
          <img className='translate-x-1/4 sm:translate-x-1/2 md:translate-x-1/3 sm:max-w-lg lg:translate-x-0' src={homeImg} alt='Sacola sustentável' />

          <img className='absolute top-44 right-[10%] w-[10%] max-w-24 -z-10' src={butterflyIcon} />
          <img className='absolute top-60 left-[20%] w-[8%] max-w-12 opacity-60 -z-10' src={butterflyIcon} />
          <img className='absolute bottom-16 left-[10%] w-[15%] max-w-36 -z-10' src={bulbIcon} />
        </div>
      </section>
      <div className='w-full flex justify-center'>
        <div className='w-2/5 max-w-60 h-1 bg-zinc-500 rounded-lg my-8'></div>
      </div>
      <section className='py-6 px-2 flex flex-col justify-center items-center relative'>
        <div className='responsive-container flex flex-col items-center gap-8'>
          <h1 className='text-gray text-2xl font-bold text-center'>Por que escolher o Greenify?</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {chooseOptions.map((item, index) => (
              <ChooseOption img={item.img} alt={item.alt} title={item.title} description={item.description} key={index} />
            ))}
          </div>
        </div>
      </section>
      <div className='w-full flex justify-center'>
        <div className='w-2/5 max-w-60 h-1 bg-zinc-500 rounded-lg my-8'></div>
      </div>
      <section className='pt-6 pb-16 px-2 flex flex-col justify-center items-center relative'>
        <img className='absolute -top-10 right-[10%] translate-x-1/2 -z-10 min-w-56 w-[25%] max-w-[300px]' src={plantIcon} />
        <div className='responsive-container flex flex-col items-center gap-8'>
          <h1 className='text-gray text-2xl font-bold text-center'>Nossos Produtos Sustentáveis Mais Vendidos</h1>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {products.map((item, index) => (
              <ProductCard img={item.img} alt={item.alt} name={item.name} regularPrice={item.regularPrice} discountedPrice={item.discountedPrice} reviews={item.reviews} key={index} />
            ))}
          </div>
        </div>
        <img className='absolute -bottom-28 left-[10%] -translate-x-1/2 -z-10 min-w-56 w-[25%] max-w-[300px] rotate-45' src={plantIcon} />
      </section>
      <section className='py-6 px-2 flex flex-col justify-center items-center bg-center bg-no-repeat bg-cover bg-blend-overlay relative' style={{ backgroundImage: `url(${aboutBackground})`, backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
        <img className='absolute -top-4 right-[8%] w-[12%] max-w-[140px]' src={butterflyIcon} />
        <div className='responsive-container flex flex-col justify-center items-center gap-8 lg:max-w-[900px]'>
          <h1 className='text-gray text-2xl font-bold text-center'>Sobre nós</h1>
          <div className='bg-white rounded-lg py-2 px-5'>
            <img src={logoIcon} alt='Logotipo do Greenify' />
          </div>
          <p className='text-center text-sm font-secondary text-gray'>Na Greenify, somos mais do que apenas um site de e-commerce; somos uma comunidade apaixonada dedicada a promover um estilo de vida sustentável e eco-amigável. Nossa missão é capacitar consumidores ambientalmente conscientes, oferecendo uma seleção cuidadosa de produtos sustentáveis e de alta qualidade que inspirem mudanças positivas e façam a diferença no mundo.</p>
          <div className='flex flex-col gap-4'>
            <h2 className='font-secondary text-xl font-bold text-center'>Nossa Missão</h2>
            <p className='text-center text-sm font-secondary text-gray'>&quot;Ser a principal plataforma para uma vida sustentável, fornecendo produtos ecologicamente corretos e promovendo uma comunidade verde que incentiva o consumo consciente e a responsabilidade ambiental.&quot;</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h2 className='font-secondary text-xl font-bold text-center'>Nossa Visão</h2>
            <p className='text-center text-sm font-secondary text-gray'>&quot;Criar um futuro mais verde para as gerações futuras, onde cada escolha importa e a sustentabilidade está no cerne da vida cotidiana. Visualizamos um mundo onde práticas eco-amigáveis são a norma e, juntos, podemos ter um impacto significativo na saúde do nosso planeta.&quot;</p>
          </div>
          <button className='btn shadow-[0px_5px_0px_0px_rgba(255,255,255,1)]'>Saiba mais</button>
        </div>
      </section>
      <Reviews />
      <section className='bg-primary-green py-6 px-2 flex flex-col justify-center items-center relative'>
        <img className='brightness-0 invert grayscale absolute top-3 left-[10%] -rotate-45 min-w-8 w-[5%] max-w-[90px]' src={butterflyIcon} />
        <div className='responsive-container flex flex-col items-center justify-center gap-8 w-full'>
          <h1 className='text-white text-2xl font-bold text-center'>Blogs</h1>
          <div className='flex flex-wrap lg:flex-nowrap lg:justify-between justify-center gap-6 w-full'>
            {blogs.map((item, index) => (
              <div className='rounded-3xl bg-white max-w-[280px] xl:max-w-[350px] flex flex-col items-center shadow-xl relative z-20' key={index}>
                <img className='w-full rounded-3xl' src={item.img} alt={item.alt} />
                <div className='flex flex-col items-center gap-4 p-4 justify-between w-full h-full'>
                  <h3 className='text-center text-gray font-secondary font-semibold text-2xl'>{item.title}</h3>
                  <p className='text-center text-gray font-secondary'>{item.description}</p>
                  <button className='btn'>Saiba mais</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  )
}