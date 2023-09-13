import React, { useMemo, useState } from 'react'
import { Link, NavLink, useLoaderData } from 'react-router-dom'
import Heading from '../components/Heading'
import Select from 'react-select'
import { components } from "../utils/reactSelectOptionsStyle"
import ProductCart from '../components/ProductCart'
import { data } from '../constants/demoData'
import Button from '../components/Button'
import Slider from '../components/Slider'
export const loader = ({ params }) => {
  return params.id

}
const ProductCategory = () => {
  const options = useMemo(() => [
    {
      label: "Popularity",
      value: "Popularity"
    },
    {
      label: "Newest",
      value: "Newest"
    },
    {
      label: "Price",
      value: "Price"
    },
    {
      label: "Rating",
      value: "Rating"
    },
  ], [])
  const productdata = useLoaderData()
  const [active, setActive] = useState(false)
  return (
    <div>
      <Slider className="!lg:hidden"
        active={active}
        setActive={setActive}
        direction
      >
        <div className='flex-none px-4'>

          <div className='flex flex-col gap-y-'>
            <Heading
              className="!text-xl !font-bold !text-start"
              text="Category"
            />
            <Link to={"/"
            }
              className='py-1 leading-normal font-medium text-sm lg:text-[1rem] hover:text-green-600 transtion duration-500'
            >DugOut & One Hitter</Link>
            <Link to={"/"
            }
              className='py-1 leading-normal font-medium text-sm lg:text-[1rem] hover:text-green-600 transtion duration-500'
            >DugOut & One Hitter</Link>
            <Link to={"/"
            }
              className='py-1 leading-normal font-medium text-sm lg:text-[1rem] hover:text-green-600 transtion duration-500'
            >DugOut & One Hitter</Link>
            <Link to={"/"
            }
              className='py-1 leading-normal font-medium text-sm lg:text-[1rem] hover:text-green-600 transtion duration-500'
            >DugOut & One Hitter</Link>
          </div>
          <Heading
            className="!text-xl !font-bold !text-start"
            text="Brand"
          />
          <div className='max-h-[min(calc(100vh-50px),25rem)] overflow-y-auto'>
            <div class="z-10  bg-white">

              <ul class="px-0 pb-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">

                {
                  Array.from({ length: 20 }, (arr, index) => <li className='cursor-pointer'>
                    <div class="flex items-center py-2.5 rounded  ">
                      <input id={`checkbox-item-${index}`} type="checkbox" value="" class="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-700 " />
                      <label for={`checkbox-item-${index}`} class="w-full ml-2 text-sm font-medium text-black ">Bonnie Green</label>
                    </div>
                  </li>)
                }

              </ul>
            </div>

          </div>
          <Heading
            className="!text-xl !font-bold !text-start"
            text="Price"
          />
        </div>
      </Slider>
      <div
        className='min-h-[20rem] lg:min-h-[18rem] relative py-10 mb-24'
      >
        <nav className="flex mb-5 mt-5 px-5 " aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-[0.1rem] md:space-x-3">
            <li className="inline-flex items-center">
              <Link to={"/"} href="#" className="flex items-center text-xs  !text-white font-bold hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <a href="#" className="ml-1 text-sm  text-white font-bold hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                  <h1 className="text-white  font-medium text-lg ">About us</h1>

                </a>
              </div>
            </li>

          </ol>
        </nav>
        <div className='relative z-[1]'>
          <Heading
            text={productdata ?? ""}
            className={"!text-white !font-black"}
          />
          <p className='max-w-3xl mx-auto text-center px-4 lg:px-0 text-white text-lg leading-tight font-medium'>
            Discover a wide selection of quality hemp and cannabis flower and pre-rolls at Weed.com. Choose from a variety of strains and Cannabinoids, including Delta 8 THC, Delta 9, HHC flower, THC-O flower, THCA, Hemp CBD flower, and more. For convenience, explore our selection of pre-rolled joints and blunts. For an unforgettable experience, try our Asteroids & Moon Rocks. Soon we will also offer Delta 9 THC flower and cannabis pre-rolls, so stay tuned! Shop our accessories for  the perfect grinder to go with your flower and the perfect lighter for those pre-rolls and enjoy! Shop Weed.com…& Enjoy!
          </p>
        </div>
        <img
          className='w-full h-full absolute inset-0 -z-[1]'
          src='https://weed.com/wp-content/uploads/cache/thumbs_1920x360/459177_weed-flowers-cannabis-pre-rolls.jpg' />
      </div>

      <section className='max-w-6xl mx-auto'>
        <div
          className='flex w-full items-start'
        >
          <div className='flex-none  w-[15rem] hidden lg:block'>

            <div className='flex flex-col gap-y-'>
              <Heading
                className="!text-xl !font-bold !text-start"
                text="Category"
              />
              <Link to={"/"
              }
                className='py-1 leading-normal font-medium text-sm lg:text-[1rem] hover:text-green-600 transtion duration-500'
              >DugOut & One Hitter</Link>
              <Link to={"/"
              }
                className='py-1 leading-normal font-medium text-sm lg:text-[1rem] hover:text-green-600 transtion duration-500'
              >DugOut & One Hitter</Link>
              <Link to={"/"
              }
                className='py-1 leading-normal font-medium text-sm lg:text-[1rem] hover:text-green-600 transtion duration-500'
              >DugOut & One Hitter</Link>
              <Link to={"/"
              }
                className='py-1 leading-normal font-medium text-sm lg:text-[1rem] hover:text-green-600 transtion duration-500'
              >DugOut & One Hitter</Link>
            </div>
            <Heading
              className="!text-xl !font-bold !text-start"
              text="Brand"
            />
            <div className='max-h-[min(calc(100vh-50px),25rem)] overflow-y-auto'>
              <div class="z-10  bg-white">

                <ul class="px-0 pb-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">

                  {
                    Array.from({ length: 20 }, (arr, index) => <li className='cursor-pointer'>
                      <div class="flex items-center py-2.5 rounded  ">
                        <input id={`checkbox-item-${index}`} type="checkbox" value="" class="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-700 " />
                        <label for={`checkbox-item-${index}`} class="w-full ml-2 text-sm font-medium text-black ">Bonnie Green</label>
                      </div>
                    </li>)
                  }

                </ul>
              </div>

            </div>
          </div>
          <div className='flex-1 w-full'>
            <div
              className='flex relative z-[50] w-full items-center justify-between  mb-10 px-2 lg:px-0'
            >
              <p className='lg:block hidden'>Showing 1–24 of 255 results</p>
              <Button

                onClick={() => setActive(true)}
                className="!block lg:!hidden !bg-white !text-black !font-medium hover:!text-white hover:!bg-green-800 !rounded-lg !shadow-none !border !border-gray-200"
              >
                filter
              </Button>

              <Select options={options}
                isSearchable={false}
                components={{ IndicatorSeparator: () => null }}
              />
            </div>
            <div
              className=' grid  grid-cols-[repeat(auto-fit,minmax(min(12rem,calc(100%-30px)),_1fr))]  lg:grid-cols-[repeat(auto-fit,minmax(min(15rem,calc(100%-30px)),_1fr))] !w-full      gap-x-1 lg:gap-x-0'
            >
              {data.map((item, index) => <ProductCart
                {
                ...item
                }
                className="rounded-md !w-full"
                key={index}

              />)}
            </div>
          </div>
        </div>

      </section >
    </div >
  )
}

export default ProductCategory