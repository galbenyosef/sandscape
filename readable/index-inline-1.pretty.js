(function () {
  try {
    var saved = localStorage.getItem("sandscape-theme");
    var resolved =
      saved === "system" || (!saved && false)
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : saved === "light"
          ? "light"
          : "dark";
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(resolved);
  } catch (e) {
    /* Blocked storage: the class already on <html> stands. */
  }
})();
