const projectsContainer = document.querySelector(".projects-container");

projects.forEach((project, i) => {
  // projects box
  const projectsBox = document.createElement("a");
  projectsBox.setAttribute("class", "projects-box");
  projectsBox.setAttribute("href", `./projects/index.html?project=${project.id}`);
  projectsBox.setAttribute("target", "_blank");

  // Image section
  const projectsImg = document.createElement("div");
  projectsImg.setAttribute("class", "projects-img");
  const image = document.createElement("img");
  image.setAttribute("src", `./media/projects/${project.id}/thumb.jpg`);
  image.setAttribute("alt", project.title);

  projectsImg.append(image);

  // projects text
  const projectsText = document.createElement("div");
  projectsText.setAttribute("class", "projects-text");
  const projectsDate = document.createElement("span");
  projectsDate.textContent = project.date;
  const projectsTitle = document.createElement("h3");
  projectsTitle.setAttribute("class", "title-projects");
  projectsTitle.textContent = project.title;
  const projectsShort = document.createElement("p");
  projectsShort.textContent = project.short;

  projectsText.append(projectsDate, projectsTitle, projectsShort);

  projectsBox.append(projectsImg, projectsText);

  projectsContainer.append(projectsBox);
});
