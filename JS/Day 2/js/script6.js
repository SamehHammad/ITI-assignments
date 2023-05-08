// Task 6//

const contentUrl = "child.html";

function openChildWindow() {
  const childWindow = window.open(
    contentUrl,
    "windowOpenTab",
    "scrollbars=1,resizable=1,width=400,height=580,left=0,top=0"
  );
  childWindow.document.body.style.overflow = "auto";
  childWindow.focus();

  setTimeout(function () {
    childWindow.scrollTo({ top: 2000, behavior: "smooth" });
  }, 1000);
}
