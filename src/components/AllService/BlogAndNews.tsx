import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import axios from "axios";
import { Input } from "../ui/input";
import UpdateButton from "../ui/UpdateButton";
import DeleteAndUpdate from "../ui/DeleteButton";
import { useState } from "react";

type TId = {
  id: number;
};

const BlogAndNews = () => {
  const [updateId, setUpdateId] = useState(null);

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

  const handleUpdate = (e) => {
    e.preventDefault();
    const blogimgurl = e.target.blogimgurl.value;
    const catgory = e.target.catgory.value;
    const headline = e.target.headline.value;
    const news = e.target.news.value;
    const data = { headline, catgory, blogimgurl, news };
    axios
      .put(`https://e-service-eosin.vercel.app/blogandnews/${updateId}`, data)
      .then(() => {
        location.reload();
        console.log(updateId, "updated id....");
        alert("blogandnews updated successfully");
      })
      .catch((error) => {
        console.error("Error deleting resource:", error);
      });
  };

  const handleRemove = (id: TId) => {
    axios
      .delete(`https://e-service-eosin.vercel.app/blogandnews/${id}`)
      .then(() => {
        location.reload();
        alert("blogandnews deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting resource:", error);
      });
  };

  return (
    <>
      <Slider {...settings}>
        {data.data.map((news, i) =>
          news._id === updateId ? (
            <form
              className="bg-slate-100 border p-3 rounded mx-auto lg:w-full "
              onSubmit={handleUpdate}
            >
              <label>Image URL</label>
              <Input
                className="w-full"
                type="text"
                name="blogimgurl"
                defaultValue={news?.blogimgurl}
              />
              <label>Headline</label>
              <Input
                type="text"
                name="headline"
                defaultValue={news?.headline}
              />
              <label htmlFor="">Category</label>
              <Input type="text" name="catgory" defaultValue={news?.catgory} />
              <label htmlFor="">News</label>
              <Input
                className="h-52"
                type="text"
                name="news"
                defaultValue={news?.news}
              />
              <input
                className="btn bg-blue-600 text-white font-semibold px-6 py-3 rounded-md mt-3 w-full"
                type="submit"
                value="Update"
              />
            </form>
          ) : (
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
              <div className="flex items-end justify-end">
                <DeleteAndUpdate onClick={() => handleRemove(news._id)} />

                <UpdateButton onClick={() => setUpdateId(news._id)} />
              </div>
            </div>
          )
        )}
      </Slider>
    </>
  );
};

export default BlogAndNews;
