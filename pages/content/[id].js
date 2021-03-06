// pages/content/[id].js
import { client } from "../../libs/client";
import styles from '../../styles/Home.module.scss';

export default function ContentId({ content }) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{content.title}</h1>
      <p className={styles.publishedAt}>{content.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${content.body}`,
        }}
        className={styles.post}
      />
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "content" });

  const paths = data.contents.map((content) => `/content/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "content", contentId: id });

  return {
    props: {
      content: data,
    },
  };
};