function getMark(value) {

    value = value.trim().toUpperCase();

    if (value === "N") {
        return 0;
    }

    let mark = Number(value);

    if (isNaN(mark) || mark < 0 || mark > 25) {
        return 0;
    }

    return mark;
}

function calculate() {

    let ca1 = getMark(document.getElementById("ca1").value);
    let ca2 = getMark(document.getElementById("ca2").value);
    let ca3 = getMark(document.getElementById("ca3").value);
    let ca4 = getMark(document.getElementById("ca4").value);

    let attended = Number(document.getElementById("attendance").value);

    // Attendance Marks
    let attendanceMarks = attended + 1;

    // Best CA1 & CA2
    let best1 = Math.max(ca1, ca2);

    // Best CA3 & CA4
    let best2 = Math.max(ca3, ca4);

    // Average (whole number only)
    let average = Math.floor((best1 + best2) / 2);

    // Internal marks
    let internal = average + attendanceMarks;

    // Marks needed to pass
    let need = 40 - internal;

    if (need < 0) {
        need = 0;
    }

    document.getElementById("result").innerHTML = `
        <h3>Result</h3>
        <hr><br>

        <b>Best of CA1 & CA2:</b> ${best1}<br>

        <b>Best of CA3 & CA4:</b> ${best2}<br>

        <b>Average (Whole Number):</b> ${average}<br>

        <b>Attendance Marks:</b> ${attendanceMarks}<br>

        <b>Internal Marks:</b> ${internal} / 30<br><br>

        <h2 style="color:#0d6efd;">You need ${need} marks in the End Semester Exam to pass.</h2>
    `;
}