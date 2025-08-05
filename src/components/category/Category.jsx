import React, { useEffect, useState } from "react"
import "./category.css"
import { category } from "../../assets/data/data"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { GrFormPrevious } from "react-icons/gr"
import { MdNavigateNext } from "react-icons/md"
import { HiSparkles } from "react-icons/hi"
import axios from "axios"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

const SampleNextArrow = (props) => { 
  const { onClick } = props
  return (
    <div className='control-btn next' onClick={onClick}>
      <button>
        <MdNavigateNext className='icon' />
      </button>
    </div>
  )
}

const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn prev' onClick={onClick}>
      <button>
        <GrFormPrevious className='icon' />
      </button>
    </div>
  )
}

export const Category = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  }

  const [cats, setCat] = useState([])
  const [loading, setLoading] = useState(false)
  const { search } = useLocation()

  useEffect(() => {
    // const getCat = async () => {
    //   const res = await axios.get("http//localhost:5000/category" + search)
    //   setCat(res.data)
    // }
    // getCat()
  }, [search])

  return (
    <section className={`category ${loading ? 'loading' : ''}`}>
      <div className="content">
        <div className="category-header">
          <h2 className="category-title">
            <HiSparkles style={{ marginRight: '8px', display: 'inline' }} />
            Discover Our Community
          </h2>
          <p className="category-subtitle">
            Explore stories, resources, and support networks designed to empower and uplift the transgender community
          </p>
        </div>
        
        <Slider {...settings}>
          {category.map((item) => (
            <div className='boxs' key={item.id}>
              <div className='box'>
                <img src={item.cover} alt={item.title} />
                {item.category !== "" && (
                  <div className='overlay'>
                    <Link to={`/?cat=${item.name}`} className='link'>
                      <h4 className="card_category">{item.category}</h4>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
