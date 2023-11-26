const memberContainers = document.querySelectorAll(".member");
const projectsContainers = document.querySelectorAll(".projects-box");

window.addEventListener("scroll", checkAnimations);

function checkAnimations() {
  checkMemberContainers();
  checkProjects();
}

function checkProjects() {
  const triggerBottom = window.innerHeight;

  projectsContainers.forEach((container) => {
    const containerTop = container.getBoundingClientRect().top;

    if (containerTop < triggerBottom) {
      container.classList.add("show");
    } else {
      container.classList.remove("show");
    }
  });
}

function checkMemberContainers() {
  const triggerBottom = window.innerHeight;

  memberContainers.forEach((container) => {
    const containerTop = container.getBoundingClientRect().top;

    if (containerTop < triggerBottom) {
      if (container.id % 2 == 0) {
        container.querySelector(".memberLeftImage").classList.add("show");
        container
          .querySelector(".memberRightTextContainer")
          .classList.add("show");
      } else {
        container.querySelector(".memberRightImage").classList.add("show");
        container
          .querySelector(".memberLeftTextContainer")
          .classList.add("show");
      }
    } else {
      if (container.id % 2 == 0) {
        container.querySelector(".memberLeftImage").classList.remove("show");
        container
          .querySelector(".memberRightTextContainer")
          .classList.remove("show");
      } else {
        container.querySelector(".memberRightImage").classList.remove("show");
        container
          .querySelector(".memberLeftTextContainer")
          .classList.remove("show");
      }
    }
  });
}
