import starIcon from '../assets/icons/star.svg'
import smileIcon from '../assets/icons/smile.svg'
import leftArrow from '../assets/icons/left.svg'
import rightArrow from '../assets/icons/right.svg'
import { reviews } from '../data/reviews'
import { useEffect, useState } from 'react'
import useWindowWidth from '../hooks/useWindowWidth'

interface ReviewProps {
  img: string;
  name: string;
  message: string;
  numberStars: number;
}

export default function Reviews() {
  const [page, setPage] = useState(1)
  const [pageReviews, setPageReviews] = useState<ReviewProps[]>([])
  const [maxPagination, setMaxPagination] = useState(0)
  const windowWidth = useWindowWidth()

  useEffect(() => {
    let reviewsPerPage
    if(windowWidth >= 1024) {
      reviewsPerPage = 3
    } else if(windowWidth >= 768) {
      reviewsPerPage = 2
    } else {
      reviewsPerPage = 1
    }

    const startIndex = (page - 1) * reviewsPerPage
    const endIndex = startIndex + reviewsPerPage

    setMaxPagination(Math.ceil(reviews.length / reviewsPerPage))
    setPageReviews(reviews.slice(startIndex, endIndex))

    console.log(startIndex, endIndex)
    console.log(reviewsPerPage)
  }, [page, reviews])

  return (
    <section className='py-6 px-2 flex flex-col justify-center items-center relative'>
      <div className='responsive-container flex flex-col gap-8'>
        <h2 className='font-secondary text-2xl font-bold text-center'>Avaliações dos Clientes</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {pageReviews.length !== 0 && pageReviews.map((item, index) => (
            <div className='relative p-4 border-2 border-primary-green rounded-2xl flex flex-col items-center justify-center gap-8 max-w-[360px]' key={index}>
              <div className='bg-primary-green w-6 h-6 rounded-full absolute top-2 right-2'></div>
              <div className='flex flex-col gap-4 items-center'>
                <img className='w-[100px] h-[100px] rounded-full border-2 border-gray' src={item.img} alt={item.name} />
                <h3 className='text-center font-secondary text-2xl'>{item.name}</h3>
                <p className='text-center font-secondary'>&quot;{item.message}&quot;</p>
              </div>
              <div className='flex justify-between w-full'>
                <div className='flex gap-1'>
                  {item.numberStars <= 5 ? Array.from({ length: item.numberStars }, (_, index) => (
                    <img src={starIcon} key={index} />
                  )) : Array.from({ length: 5 }, (_, index) => (
                    <img src={starIcon} key={index} />
                  ))}
                </div>
                <img src={smileIcon} alt='Ícone de sorriso' />
              </div>
            </div>
          ))}
        </div>
        <div className='flex w-full justify-between'>
          <button disabled={page === 1}>
            <img className={`cursor-pointer ${page === 1 && 'opacity-50'}`} onClick={() => setPage(page - 1)} src={leftArrow} alt='Seta para a esquerda' />
          </button>
          <div className='flex gap-2 items-center'>
            {Array.from({ length: maxPagination }, (_, index) => (
              <div className={`${page === index + 1 ? 'bg-primary-green' : 'bg-accent-green'} w-2.5 h-2.5 rounded-full cursor-pointer`} onClick={() => setPage(index + 1)} key={index}></div>
            ))}
          </div>
          <button disabled={page === maxPagination}>
            <img className={`cursor-pointer ${page === maxPagination && 'opacity-50'}`} onClick={() => setPage(page + 1)} src={rightArrow} alt='Seta para a direita' />
          </button>
        </div>
      </div>
    </section>
  )
}