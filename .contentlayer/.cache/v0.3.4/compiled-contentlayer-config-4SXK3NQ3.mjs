// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: false },
    tags: { type: "list", of: { type: "string" }, required: true },
    slug: { type: "string", required: true },
    author: { type: "string", required: true },
    cover: { type: "string", required: false },
    date: { type: "date", required: true }
  },
  computedFields: {
    // url: {
    //     type: 'string',
    //     resolve: (post) => `/posts/${post.slug}`
    // },
    // readingTime: {
    //     type: 'nested',
    //     resolve: (doc) => readingTime(doc.body.code)
    // }
  }
}));
var contentlayer_config_default = makeSource({
  // contentDirPath: 'posts',
  contentDirPath: ".",
  contentDirInclude: ["posts"],
  documentTypes: [Post]
  // mdx: {
  //     remarkPlugins: [remarkGfm],
  //     rehypePlugins: [
  //         // 为代码添加特殊样式
  //         // @ts-ignore
  //         [rehypePrismPlus, {defaultLanguage: 'js', ignoreMissing: true}],
  //         // 为每个 header 添加 id
  //         rehypeSlug,
  //         //为 header 添加链接
  //         [
  //             rehypeAutolinkHeadings,
  //             {
  //                 behavior: 'wrap',
  //                 properties: {
  //                     className: ['anchor']
  //                 }
  //             }
  //         ]
  //     ]
  // }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-4SXK3NQ3.mjs.map
