// Copy to clipboard function
function copyToClipboard() {
    var copyText = document.getElementById('jsonBox');
    copyText.select();
    document.execCommand("copy");  // copy to clipboard
    if (window.getSelection) {  // deselect text
      window.getSelection().removeAllRanges();
    } else if (document.selection) {
      document.selection.empty();
    }
}


// Clear Button
document.getElementById("clear").onclick = function () { 
    document.getElementById('jsonBox').value = '';
    document.getElementById('highlighted').innerHTML = 'Syntax highlighted JSON will appear here...';
  };
  
  
// Copy to clipboard Button
document.getElementById("copy").onclick = function () { 
copyToClipboard();
};


// Check for valid JSON
function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

// JSON formatting with syntax highlighting
function syntaxHighlight(json) {
    if (typeof json != 'string') {
         json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}
  

// JSON Prettify Button
document.getElementById("prettifyJSON").onclick = function () { 
    var text = document.getElementById('jsonBox').value;

    if (isJsonString(text)) {
        var result = JSON.stringify(JSON.parse(text), null, 4); // spacing level = 2
        var code = syntaxHighlight(result)

        document.getElementById('jsonBox').value = result;
    } else {
        var code = '<span class="key">Invalid JSON!</span>'
    }

    document.getElementById('highlighted').innerHTML = code;
    copyToClipboard();
};


// JSON Minify Button
document.getElementById("minifyJSON").onclick = function () { 
    var text = document.getElementById('jsonBox').value;

    if (isJsonString(text)) {
        var result = JSON.stringify(JSON.parse(text));
        var code = syntaxHighlight(result)

        document.getElementById('jsonBox').value = result;
    } else {
        var code = '<span class="key">Invalid JSON!</span>'
    }

    document.getElementById('highlighted').innerHTML = code;
    copyToClipboard();
};