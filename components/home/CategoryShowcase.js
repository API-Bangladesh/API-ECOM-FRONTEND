import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import { fetchCategories } from "../../services/CategoryServices";
import { getStoragePath } from "../../utils/helpers";
import { Col } from "react-bootstrap";
import { SlScreenDesktop } from 'react-icons/sl';

const CategoryShowcase = () => {
  const [categories, setCategories] = useState([]);

  // fetch
  useEffect(() => {
    fetchCategories({
      paginate: "no",
    }).then((response) => {
      if (response?.data) {
        setCategories(response.data);
      }
    });
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrow: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Fragment>
      <section className="categories">
        <div className="container p-0">
          <h1 className="font-30 text-start font-inter pt-3 pb-3 mt-3 mb-3 border-bottom">
            Categories
          </h1>
          <div className="col-lg-12 slider-primary">
            <Slider {...settings}>
            {categories &&
              categories.map((category, key) => {
                return (
                  <Col
                  lg={2}
                  key={key}
                  className="my-3"
                >
                   <Link href={`/category/${category.id}`}> 
                  <div className="category_one rounded-1 px-3 py-3">
                    <div className="category d-flex justify-content-center">
                      <img src={getStoragePath(
                            `category-image/${category.image}`
                          )} alt="" className="category_img"/>
                    </div>
                    <div className="text-center">{category.name}</div>
                  </div>
                  </Link>

                </Col>


                );
              })}
            </Slider>
          </div>

         
        </div>
      </section>
    </Fragment>
  );
};

export default CategoryShowcase;
