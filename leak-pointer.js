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
        
        console.log("[!!!] WE GOT SOMETHING. CHECK THE LOGS ABOVE.");
    } else {
        
    
        setTimeout(runExperiment, 50); 
    }
}


runExperiment();
