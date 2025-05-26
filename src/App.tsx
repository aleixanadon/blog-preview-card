import "./App.css";
import BlogPreviewCard from "./components/BlogPreviewCard/BlogPreviewCard";
import type { BlogPreviewCardProps } from "./interfaces/BlogPreviewCardProps";
import MainImage from "./assets/main_image.png"; 
import AuthorImage from "./assets/userpic.png"

function App() {

  const blogPreviewCardMock: BlogPreviewCardProps = {
    mainImage: MainImage,
    pillText: "Learning",
    publishedDate: "21 Dec 2023",
    title: "HTML & CSS foundations",
    paragraph: "These languages are the backbone of every website, defining structure, content, and presentation.",
    authorImage: AuthorImage,
    author: "Greg Hooper"
  }

  return (
    <>
      <BlogPreviewCard
        mainImage={blogPreviewCardMock.mainImage}
        pillText={blogPreviewCardMock.pillText}
        publishedDate={blogPreviewCardMock.publishedDate}
        title={blogPreviewCardMock.title}
        paragraph={blogPreviewCardMock.paragraph}
        authorImage={blogPreviewCardMock.authorImage}
        author={blogPreviewCardMock.author}
      />
    </>
  );
}

export default App;
