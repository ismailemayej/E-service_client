import AddButton from "@/components/AddButton";
import BlogAndNews from "@/components/AllService/BlogAndNews";
import Heading from "@/components/Heading";

const ControlBlogAndNews = () => {
  return (
    <div>
      {" "}
      <Heading subTitle="" title="Blog And News" />
      <BlogAndNews />
      <AddButton link="add-blogandnews">Add Blog And News</AddButton>
    </div>
  );
};

export default ControlBlogAndNews;
