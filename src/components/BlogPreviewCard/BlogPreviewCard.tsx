import type { BlogPreviewCardProps } from "../../interfaces/BlogPreviewCardProps";
import "./BlogPreviewCard.css";

const BlogPreviewCard: React.FC<BlogPreviewCardProps> = ({
  mainImage,
  pillText,
  publishedDate,
  title,
  paragraph,
  authorImage,
  author,
}: BlogPreviewCardProps) => {
  return (
    <article className="blog-container">
      <img src={mainImage} alt="Main image" className="main-image" />
      <div className="pill-text">{pillText}</div>
      <div className="date-div">Published {publishedDate}</div>
      <div className="title">{title}</div>
      <div className="paragraph">{paragraph}</div>
      <div className="author-div">
        <img src={authorImage} alt="Author image" className="author-img" />
        <div className="author-name">{author}</div>
      </div>
    </article>
  );
};

export default BlogPreviewCard;
