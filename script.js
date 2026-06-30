function getMark(value) {

    value = value.trim().toUpperCase();

    if (value === "N") {
        return 0;
    }

    let mark = parseFloat(value);

    if (isNaN(mark)) {
        return 0;
    }

    return mark;
}

function calculate() {

    let ca1 = getMark(document.getElementById("ca1").value);
    let ca2 = getMark(document.getElementById("ca2").value);
    let ca3 = getMark(document.getElementById("ca3").value);
    let ca4 = getMark(document.getElementById("ca4").value);

    let attend = parseInt(document.getElementById("attendance").value);

    // Attendance Marks
    let attendanceMarks = attend + 1;

    // Best marks
    let best12 = Math.max(ca1, ca2);
    let best34 = Math.max(ca3, ca4);

    // Average
    let average = (best12 + best34) / 2;

    // Internal Marks
    let internal = average + attendanceMarks;

    // Marks required to pass
    let required = 40 - internal;

    if (required < 0) {
        required = 0;
    }

    document.getElementById("output").innerHTML = `
        <h3>Result</h3>
        <hr><br>

        <b>Best of CA1 & CA2:</b> ${best12}<br>

        <b>Best of CA3 & CA4:</b> ${best34}<br>

        <b>Average:</b> ${average.toFixed(2)}<br>

        <b>Attendance Marks:</b> ${attendanceMarks}<br>

        <b>Internal Marks:</b> ${internal.toFixed(2)} / 30<br><br>

        <h2>You need ${required.toFixed(2)} marks in the End Semester Exam to pass.</h2>
    `;
}