var Module = Object.assign(Module || {}, {
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
    },
    instantiateWasm: function(imports, successCallback) {
        fetch('doom.wasm').then(response => {
            return response.arrayBuffer();
        }).then(binary => {
            return WebAssembly.instantiate(binary, imports);
        }).then(result => {
            Module.callMain = result.instance.exports.main || result.instance.exports._main;
            successCallback(result.instance);
        });
        return {}; 
    }
};

(function() {
    console.log("GET: startup_script.bin");
})();
