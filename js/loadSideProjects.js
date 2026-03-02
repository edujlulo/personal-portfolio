async function loadSideProject(path) {
  try {
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error(`Error loading ${path}`);
    }

    const html = await response.text();
    document
      .getElementById("side-projects-container")
      .insertAdjacentHTML("beforeend", html);
  } catch (error) {
    console.error(error);
  }
}

async function initProjects() {
  await loadSideProject("components/project-task-manager.html");
  await loadSideProject("components/project-currency-converter.html");
  await loadSideProject("components/project-rock-paper-scissors.html");
}

document.addEventListener("DOMContentLoaded", initProjects);
