document.body.addEventListener("click", onClick);
function onClick(event) {
  if (event.target.tagName !== "BUTTON") {
    return;
  }
  const src = document.querySelector('input[name="src"]').value;

  if (!src) {
    return;
  }

  const buttonName = event.target.name;

  const protocolIndex = src.search(`${buttonName}://`);
  let newSrc;

  if (protocolIndex + 1) {
    newSrc = src;
  } else {
    const removeIndex = src.search(`://`);
    if (removeIndex + 1) {
      newSrc = buttonName + src.slice(removeIndex);
    } else {
      newSrc = `${buttonName}://${src}`;
    }
  }
  window.open(newSrc, "_blank");
}
