const file = document.getElementById("file");
const start = document.getElementById("start");
const loading = document.getElementById("loading");
const final = document.getElementById("final");
const link_image = document.getElementById("link_image");
const link_input = document.getElementById("link_input");
const btn = document.getElementById("btn");
const drag = document.getElementById("drag");

file.onchange = (e) => {
  const data = new FormData();
  data.append("image", e.target.files[0]);

  start.hidden = true;
  loading.hidden = false;

  fetch("/upload", {
    method: "POST",
    body: data,
  })
    .then((data) => data.json())
    .then((data) => {
      loading.hidden = true;
      link_image.src = `${location.origin}/uploads/${data.file.filename}`;
      link_input.value = `${location.origin}/uploads/${data.file.filename}`;
      final.hidden = false;
    });
};

btn.onclick = (e) => {
  link_input.select();
  document.execCommand("copy");
  alert("Text copy to the clipboard");
};

drag.ondragover = (e) => {
  e.preventDefault();
};

drag.ondragleave = (e) => {};

drag.ondrop = (e) => {
  const data = new FormData();
  data.append("image", e.dataTransfer.files[0]);

  start.hidden = true;
  loading.hidden = false;

  fetch("/upload", {
    method: "POST",
    body: data,
  })
    .then((data) => data.json())
    .then((data) => {
      loading.hidden = true;
      link_image.src = `${location.origin}/uploads/${data.file.filename}`;
      link_input.value = `${location.origin}/uploads/${data.file.filename}`;
      final.hidden = false;
    });
  e.preventDefault();
};
