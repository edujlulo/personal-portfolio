const projects = [
  { title: "Proyecto A", description: "Descripción A", link: "#" },
  { title: "Proyecto B", description: "Descripción B", link: "#" },
];

const ul = document.getElementById("projects-list");
projects.forEach((p) => {
  const li = document.createElement("li");
  li.className = "p-4 bg-white rounded shadow";
  li.innerHTML = `<h3 class="font-medium">${p.title}</h3><p class="text-sm text-gray-500">${p.description}</p>`;
  ul.appendChild(li);
});
