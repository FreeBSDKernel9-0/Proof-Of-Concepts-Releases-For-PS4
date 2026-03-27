PS4_13.04_Research

<!DOCTYPE html>
<html>
<head>
    <title>Shadowdev 13.04 Lab</title>
    <style>
        body { background: #1a1a1a; color: #00ff00; font-family: monospace; padding: 20px; }
        #status { font-size: 24px; margin-bottom: 10px; }
        #log { background: #000; border: 1px solid #333; height: 300px; overflow-y: scroll; padding: 10px; }
    </style>
</head>
<body>
    <div id="status">System: <span id="state">WAITING</span></div>
    <div id="log"></div>
    <button onclick="startResearch()">Trigger Memory Test</button>

    <script src="research.js"></script>
</body>
</html>
