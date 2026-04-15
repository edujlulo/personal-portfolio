async function loadMainProject(path) {
  try {
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error(`Error loading ${path}`);
    }

    const html = await response.text();

    const container = document.getElementById("main-projects-container");

    container.insertAdjacentHTML("beforeend", html);
  } catch (error) {
    console.error(error);
  }
}

async function initProjects() {
  await loadMainProject("components/project-echosoft.html");
  await loadMainProject("components/project-samivet.html");
}

document.addEventListener("DOMContentLoaded", initProjects);
