import fs from "fs";
import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";
export interface Props {
  fileName: string;
  customDuration: string;
}

export default function ReadingTime({ fileName, customDuration }: Props) {
  const getPost = () => {
    // read the file only once and store the result in a variable
    const filePath =
      fileName !== undefined
        ? path.join("src", "content", "blog", `${fileName}.md`)
        : null;
    if (filePath !== null) {
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
      return {
        ...data,
        content,
        fileName,
      };
    } else {
      return { content: "" };
    }
  };
  const readTime = () => {
    const stats =
      getPost() !== undefined ? readingTime(getPost().content) : null;
    // round minutes and return as string
    return customDuration !== null &&
      customDuration !== undefined &&
      customDuration !== ""
      ? customDuration
      : stats !== null
      ? `${Math.round(stats.minutes)} min read (${Math.round(
          stats.words
        )} words)`
      : "";
  };
  return <span>{readTime()}</span>;
}
