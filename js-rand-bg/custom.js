(function () {
  const bgDir = '/images/';
  // files must exist under /images/, can be gif/jpg/png etc
  // tested with one format only; gif
  const filelist = ['myfilename01', 'myfilename02', 'myfilename03'];

  // Pick a random filename
  const chosen = filelist[Math.floor(Math.random() * filelist.length)];
  // Append file extension; gif
  const filename = `${chosen}.gif`;

  const backgroundDiv = document.getElementById('background');

  if (backgroundDiv) {
    backgroundDiv.style.backgroundImage =
      `linear-gradient(rgb(var(--bg-color) / 0.5), rgb(var(--bg-color) / 0.5)), url('${bgDir}${filename}')`;
  }
})();
