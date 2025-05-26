import "./App.css";
import BlogPreviewCard from "./components/BlogPreviewCard/BlogPreviewCard";
import type { BlogPreviewCardProps } from "./interfaces/BlogPreviewCardProps";

function App() {

  const blogPreviewCardMock: BlogPreviewCardProps = {
    mainImage: "src/assets/main_image.png",
    pillText: "Learning",
    publishedDate: "21 Dec 2023",
    title: "HTML & CSS foundations",
    paragraph: "These languages are the backbone of every website, defining structure, content, and presentation.",
    authorImage: "src/assets/userpic.png",
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
