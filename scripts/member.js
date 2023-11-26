const params = new URLSearchParams(window.location.search);

const memberId = params.get("member");

members.forEach((member) => {
  if (member.id === memberId) {
    document.title = `${member.fullName} - Innocrew`;
    document
      .querySelector("#memberThumbBlock")
      .setAttribute("alt", member.fullName);
    document
      .querySelector("#memberThumbBlock")
      .setAttribute("src", `../media/members/${member.id}.jpg`);

    document.querySelector("#projectTitleBlock").textContent = member.fullName;
    document.querySelector("#memberShortBlock").innerHTML = member.short;

    document.querySelector("#moreAbout").innerHTML = member.content;

    document
      .querySelector("#memGithub")
      .setAttribute("href", `https://github.com/${member.github}`);
    document
      .querySelector("#memLinkedin")
      .setAttribute("href", `${member.linkedin ? `https://linkedin.com/in/${member.linkedin}` : "#"}`);
    document
      .querySelector("#memCodeacad")
      .setAttribute(
        "href",
        `https://codeacademy.com/profiles/${member.codeAcademy}`
      );
  }
});
