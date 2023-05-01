import React from "react";
import { Helmet } from "react-helmet";
import { Json } from '../types';

// import '../css/blog-post.css'; // make it pretty!

type TemplateProps = {
    data:{
        markdownRemark: any;
    }
}

export default function Template({data}: TemplateProps) {
  const { markdownRemark: post } = data;

  return (
    <div className="blog-post-container">
      <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  )
}

