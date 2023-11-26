const params = new URLSearchParams(window.location.search);

const projectId = params.get("project");

projects.forEach((project) => {
  if (project.id === projectId) {
    document.querySelector("#projectThumb").setAttribute("alt", project.title);
    document
      .querySelector("#projectThumb")
      .setAttribute("src", `../media/projects/${project.id}/thumb.jpg`);

    document.title = `${project.title} - InnoCrew`;

    document.querySelector("#projectDate").textContent = project.date;
    document.querySelector("#projectTitle").textContent = project.title;

    document.querySelector("#projectContent").innerHTML = project.fullText;
  }
});
