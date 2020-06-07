const editor = document.getElementById('editor')
const preview = document.getElementById('preview')
const input =
  `# William Simms
  ###### Type Here And Your Markdown Shall Show Below`
let renderer = new marked.Renderer();
renderer.link = (href, title, text) => {
  return `<a target="_blank" href=${href}>${text}</a>`;
};
marked.setOptions({
  gfm: true,
  breaks: true,
  renderer: renderer
});
editor.value = input;
preview.innerHTML = marked(editor.value);
editor.addEventListener("input", () => {
  document.querySelector("#preview").innerHTML = marked(editor.value);
});