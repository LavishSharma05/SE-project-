function updateHealthMetrics() {
    // Blood Pressure
    const systolic = Math.floor(Math.random() * (140 - 90 + 1)) + 90;
    const diastolic = Math.floor(Math.random() * (90 - 60 + 1)) + 60;
    document.getElementById('bloodPressure').textContent = `${systolic} / ${diastolic} mmHg`;
    document.getElementById('bpStatus').textContent = (systolic > 130 || diastolic > 85) ? "High" : "Normal";

    // Blood Sugar
    const bloodSugar = Math.floor(Math.random() * (200 - 70 + 1)) + 70;
    document.getElementById('bloodSugar').textContent = `${bloodSugar} mg/dL`;
    document.getElementById('sugarStatus').textContent = (bloodSugar < 70 || bloodSugar > 140) ? "Abnormal" : "Normal";

    // Oxygen Level
    const oxygenLevel = Math.floor(Math.random() * (100 - 90 + 1)) + 90;
    document.getElementById('oxygenLevel').textContent = `${oxygenLevel}%`;
    document.getElementById('oxygenStatus').textContent = (oxygenLevel < 95) ? "Low" : "Normal";

    // Body Temperature
    const bodyTemp = (Math.random() * (39 - 36) + 36).toFixed(1);
    document.getElementById('bodyTemp').textContent = `${bodyTemp} °C`;
    document.getElementById('tempStatus').textContent = (bodyTemp > 37.5) ? "Fever" : "Normal";
}

// Update health metrics every 3 seconds
setInterval(updateHealthMetrics, 3000);

// Initial call
updateHealthMetrics();
