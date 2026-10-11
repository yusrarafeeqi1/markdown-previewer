const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

function render() {
  preview.innerHTML = markdownToHtml(editor.value);
}

editor.addEventListener("input", render);
render();
