const articleContainer = document.querySelector("#member-container");

members.forEach((member, i) => {
  // member box
  const memberBox = document.createElement("article");
  memberBox.setAttribute("class", "member");
  memberBox.setAttribute("id", i);

  // Image section
  const image = document.createElement("img");
  image.setAttribute("src", `./media/members/${member.id}.jpg`);
  image.setAttribute("alt", member.fullName);

  const textContainer = document.createElement("div");
  const text = document.createElement("h5");
  text.textContent = member.fullName;
  const p = document.createElement("p");
  p.innerHTML = member.short;
  const a = document.createElement("a");
  a.setAttribute("target", "_blank");
  a.setAttribute("href", `./members/index.html?member=${member.id}`);
  a.textContent = "More";

  textContainer.append(text, p, a);

  if (i % 2 === 0) {
    image.classList.add("memberLeftImage");
    textContainer.classList.add("memberRightTextContainer");
    memberBox.append(image, textContainer);
  } else {
    image.classList.add("memberRightImage");
    textContainer.classList.add("memberLeftTextContainer");
    memberBox.append(textContainer, image);
  }

  articleContainer.append(memberBox);
});
