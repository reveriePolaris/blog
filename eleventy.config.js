import { HtmlBasePlugin } from "@11ty/eleventy"

export default async function(eleventyConfig) {
    eleventyConfig.setInputDirectory("src");
    eleventyConfig.setOutputDirectory("docs");
    eleventyConfig.setIncludesDirectory("include");
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPlugin(HtmlBasePlugin)
}

export const config = {
    pathPrefix: "/blog/"
}