import Heading from "@/components/Heading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { TNews } from "@/components/AllService/BlogAndNews";

// next and prev button funtion

const BlogAndNews = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // fetch data for news
  const { isLoading, data } = useQuery({
    queryKey: ["blogandnews"],
    queryFn: () => {
      return fetch("https://e-service-eosin.vercel.app/blogandnews").then(
        (res) => res.json()
      );
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Heading subTitle="" title="Recent Blog and news" />
      <Slider {...settings}>
        {data?.data?.map((news: TNews) => (
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to="#">
              <img
                className="rounded-t-lg"
                src={news.blogimgurl}
                alt={news.headline}
              />
            </Link>
            <div className="p-3">
              <Link to="#">
                <h5 className=" max-headline-lines mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {news.headline}
                </h5>
              </Link>
              <p className="text-blue-300">
                Category:
                <span className="text-green-400">{news.catgory}</span>
              </p>
              <p className="indent-6 max-new-lines mb-3 font-normal text-gray-700 dark:text-gray-400">
                {news.news}
              </p>
              <Link
                to="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default BlogAndNews;
