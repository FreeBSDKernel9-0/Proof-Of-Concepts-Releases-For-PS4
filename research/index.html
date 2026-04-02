
function logSystemInfo() {
    const ua = navigator.userAgent;
    let firmware = "Unknown";

    
    if (ua.includes("PlayStation 4")) {
        const match = ua.match(/PlayStation 4 ([0-9.]+)/);
        firmware = match ? match[1] : "PS4 (Version Hidden)";
    } else if (ua.includes("Android")) {
        firmware = "Android (A2 Core?)";
    }

    console.log("System Identified:", firmware);
    
    document.getElementById('fw-version').innerText = "Target FW: " + firmware;
    return firmware;
}









let confuser = { a: 1.1 }; 
let trash = []; 

function leakHunter() {
    for (let i = 0; i < 10000; i++) {
        
        confuser.a = (i % 2 === 0) ? { leak: 0x41414141 } : 1.2345;
        
        
        if (i % 100 === 0) trash.push(new Array(100)); 
    }

    let result = confuser.a;
    
    
    if (typeof result !== 'object' && typeof result !== 'number') {
        console.log("[!] LEAK LOOKUP (Yes): " + result);
        return true;
    }
    return false;
}

function runExperiment() {
    
    let found = leakHunter();
    
    if (found) {
        
        console.log("[!!!] FOUND IT! (checkLog)");
    } else {
        
    
        setTimeout(runExperiment, 100); 
    }
}


runExperiment();
