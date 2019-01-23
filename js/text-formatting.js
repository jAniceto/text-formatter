// Copy to clipboard function
function copyToClipboard() {
    var copyText = document.getElementById('textBox');
    copyText.select();
    document.execCommand("copy");
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
    // logic here
    document.getElementById('textBox').value = result;
  };
  
  
  // Capitalize Button
  document.getElementById("capitalize").onclick = function () { 
    var text = document.getElementById('textBox').value;
    // logic here
    document.getElementById('textBox').value = result;
  };
  
  
  // Lower Dashed Button
  document.getElementById("dashed").onclick = function () { 
    var text = document.getElementById('textBox').value;
    // logic here
    document.getElementById('textBox').value = result;
  };
  
  
  // Clear Button
  document.getElementById("clear").onclick = function () { 
    document.getElementById('textBox').value = '';
  };
  
  
  // Copy to clipboard Button
  // document.getElementById("copy").onclick = function () { 
  //   var copyText = document.getElementById('textBox');
  //   copyText.select();
  //   document.execCommand("copy");
  // };
  
  // Copy to clipboard Button
  document.getElementById("copy").onclick = function () { 
    copyToClipboard();
  };