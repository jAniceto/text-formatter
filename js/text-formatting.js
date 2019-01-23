// Copy to clipboard function
function copyToClipboard() {
  var copyText = document.getElementById('textBox');
  copyText.select();
  document.execCommand("copy");  // copy to clipboard
  if (window.getSelection) {  // deselect text
    window.getSelection().removeAllRanges();
  } else if (document.selection) {
    document.selection.empty();
  }
}
  
  
// Lowercase Button
document.getElementById("lowercase").onclick = function () { 
  var text = document.getElementById('textBox').value;
  var result = text.toLowerCase();
  document.getElementById('textBox').value = result;
  copyToClipboard();
};


// Uppercase Button
document.getElementById("uppercase").onclick = function () { 
  var text = document.getElementById('textBox').value;
  var result = text.toUpperCase();
  document.getElementById('textBox').value = result;
  copyToClipboard();
};


// Sentence Case Button
document.getElementById("sentence").onclick = function () { 
  var text = document.getElementById('textBox').value;
  
  var n = text.split(".");
  var vfinal = ""
  for(i=0; i < n.length; i++) {
    var spaceput = "";
    var spaceCount = n[i].replace(/^(\s*).*$/,"$1").length;
    n[i] = n[i].replace(/^\s+/,"");
    var newstring = n[i].charAt(n[i]).toUpperCase() + n[i].slice(1);
    for(j=0;j<spaceCount;j++)
    spaceput = spaceput + " ";
    vfinal = vfinal + spaceput + newstring + ".";
  }
  vfinal = vfinal.substring(0, vfinal.length - 1);

  document.getElementById('textBox').value = vfinal.replace(/-/g, " ");
  copyToClipboard();
};


// Capitalize Button
document.getElementById("capitalize").onclick = function () { 
  var text = document.getElementById('textBox').value;
  var result = text.replace(
    /\w\S*/g,
    function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
  document.getElementById('textBox').value = result.replace(/-/g, " ");
  copyToClipboard();
};


// Lower Dashed Button
document.getElementById("dashed").onclick = function () { 
  var text = document.getElementById('textBox').value;
  
  var result = text.toLowerCase().replace(/ /g, "-");

  document.getElementById('textBox').value = result;
  copyToClipboard();
};


// Clear Button
document.getElementById("clear").onclick = function () { 
  document.getElementById('textBox').value = '';
};


// Copy to clipboard Button
document.getElementById("copy").onclick = function () { 
  copyToClipboard();
};