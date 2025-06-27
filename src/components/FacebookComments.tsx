"use client";

import { useEffect } from "react";

type FacebookCommentsProps = {
  postId: string;
};

const FacebookComments = ({ postId }: FacebookCommentsProps) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    script.src =
      "https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v23.0&appId=1417721672739686";
    document.body.appendChild(script);

    const fbRoot = document.createElement("div");
    fbRoot.id = "fb-root";
    document.body.prepend(fbRoot);
  }, []);

  return (
    <div
      className="fb-comments"
      data-href={`https://seusite.com/posts/${postId}`}
      data-width="100%"
      data-numposts="5"
      data-colorscheme="dark"
    ></div>
  );
};

export default FacebookComments;
