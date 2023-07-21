"use client";
import React from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {
  const session = useSession();
  console.log(session);

  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );
  console.log(data);
  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router.push("/dashboard/login");
  }

  if (session.status === "authenticated") {
    router.push("/dashboard");
  }

  // console.log(data)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  // function truncate(source, size) {
  //   return source.length > size ? source.slice(0, size - 1) + "…" : source;
  // }

  // // if(styles)
  // var res = truncate(post.content, post.content?.length);

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "loading"
            : data?.map((post) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.box}>
                    <div className={styles.imgContainer}>
                      <Image src={post.img} alt="" width={200} height={200} />
                    </div>

                    <div className={styles.details}>
                      <div className={styles.postTitle}>{post.title} </div>
                      <div className={styles.desc}>
                        {post.desc.length > 50
                          ? post.desc.substr(0, 50) + "..."
                          : post.desc}
                      </div>
                      <div className={styles.content}>
                        {post.content.length > 250
                          ? post.content.substr(0, 250) + "..."
                          : post.content}
                        {/* {res} */}
                      </div>
                    </div>
                  </div>

                  <div
                    className={styles.delete}
                    onClick={() => handleDelete(post._id)}
                  >
                    x
                  </div>
                </div>
              ))}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input type="text" placeholder="Image" className={styles.input} />
          <textarea
            placeholder="Content"
            className={styles.textArea}
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
