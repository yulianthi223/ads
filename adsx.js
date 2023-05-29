
//simpan ke dalam file adsx.js

const DIRECTLINK_ADS = "https://stereosuspension.com/mn7fq63s0?key=22a796c4baa0556691269c610d4c20c2";

var scripts = [
	"https://stereosuspension.com/d0/bc/96/d0bc9676001119d736deeb8977fa001f.js",//popunder js
	"https://stereosuspension.com/424c3e1928d771c66100557cdba049a5/invoke.js",//banner js
];

for (index = 0; index < scripts.length; ++index) {
    var script = document.createElement('script');
    script.src = scripts[index];
    script.type='text/javascript';
    var done = false;
    script.onload = script.onreadystatechange = function() {
        if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
            done = true;
            //promptForUserEntries();
        }
    };  
    document.getElementsByTagName("body")[0].appendChild(script);
}
