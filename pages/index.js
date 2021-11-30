import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ content }) {
  return (
    <div>
      <ul>
        {content.map((content) => (
          <li key={content.id}>
            <Link href={`/content/${content.id}`}>
              <a>{content.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "content" });

  return {
    props: {
      content: data.contents,
    },
  };
};