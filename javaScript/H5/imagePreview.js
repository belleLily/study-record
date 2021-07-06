//   <input type="file" name="file" onchange="showPreview(this)" />
//   <img id="portrait" src="" width="70" height="75">

function showPreview(this) {
  var file = this.files[0];
  if (window.FileReader) {
    var fr = new FileReader();
    fr.onloadend = function (e) {
      document.getElementById("portrait").src = e.target.result;
    };
    fr.readAsDataURL(file);
  }
}
