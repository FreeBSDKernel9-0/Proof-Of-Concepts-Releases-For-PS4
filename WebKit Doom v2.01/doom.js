var Module = {
    canvas: document.getElementById('canvas'),
    arguments: [],
    print: function(text) { console.log(text); },
    printErr: function(text) { console.error(text); },
    setStatus: function(text) {
        var status = document.getElementById('status');
        if (status) status.innerHTML = text;
    },
    monitorRunDependencies: function(left) {
        this.setStatus(left ? "Trying run... (" + left + ")" : "Constructed doom.js");
    }
};


async function startDoom() {
    try {
        const response = await fetch('doom.wasm');
        if (!response.ok) throw new Error("Can't fetch doom.wasm");
        const binary = await response.arrayBuffer();
        Module.wasmBinary = binary;

        
        var script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/gh/kripken/emscripten/master/src/shell.js"; 
        script.onload = () => {
            console.log("Engine Handshake Complete");
        };
        document.body.appendChild(script);
    } catch (e) {
        Module.setStatus("FATAL: " + e.message);
    }
}

startDoom();
