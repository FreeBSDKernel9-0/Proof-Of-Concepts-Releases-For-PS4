// Made by Shadowdev-Vita
// Copyright June 2026
// Again, if you're running this, it's best to inject into DevTools.

// This is completely open source. 

// If you want the redirect, copy my setup (with the NULL value in TARGET_LIMIT)
// but if you're pen-testing, change this line to the value you want: const TARGET_LIMIT_GB = 0.0;

const TARGET_LIMIT_GB = 0.0;
const TARGET_LIMIT_BYTES = TARGET_LIMIT_GB * 1024 * 1024 * 1024; 
const TARGET_LIMIT_MB = TARGET_LIMIT_GB * 1024;                

let memoryLocker = []; 
let allocatedMB = 0;
let stressTestInterval = null;

function checkMemoryStatus() {
    let currentBytes = 0;
    let displaySource = "";

    if (window.performance && performance.memory) {
        currentBytes = performance.memory.usedJSHeapSize;
        displaySource = "API";
    } else {
        currentBytes = allocatedMB * 1024 * 1024;
        displaySource = "Calculated";
    }

    const currentGB = currentBytes / (1024 * 1024 * 1024);
    console.log(`[${displaySource}] Memory Usage: ${currentGB.toFixed(3)} GB / ${TARGET_LIMIT_GB.toFixed(3)} GB`);

    if (currentBytes >= TARGET_LIMIT_BYTES || allocatedMB >= TARGET_LIMIT_MB) {
        console.warn("(If You're using this for redirects, you can ignore this.)");
        
        clearInterval(stressTestInterval);
        
        triggerThresholdAction();
    }
}

function triggerThresholdAction() {
    console.log("Preparing to redirect...");

    window.location.href = "https://ps5jb.pages.dev/";
}

function runStressTest() {
    console.log("The stress test begins now!");
    
    stressTestInterval = setInterval(() => {
        try {
            const chunk = new Uint8Array(10 * 1024 * 1024);
            
            for (let i = 0; i < chunk.length; i += 4096) {
                chunk[i] = 0x41; 
            }
            
            memoryLocker.push(chunk);
            allocatedMB += 10;

            checkMemoryStatus();

        } catch (error) {
            console.error("Browser Error: Memory Limit Reached! (Crash)", error);
            clearInterval(stressTestInterval);
            triggerThresholdAction();
        }
    }, 100); 
}

runStressTest();
