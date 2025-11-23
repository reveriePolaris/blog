export default async function(eleventyConfig) {
    eleventyConfig.setInputDirectory("src");
    eleventyConfig.setOutputDirectory("output");
    eleventyConfig.setIncludesDirectory("include");
    eleventyConfig.addPassthroughCopy("src/css");
}