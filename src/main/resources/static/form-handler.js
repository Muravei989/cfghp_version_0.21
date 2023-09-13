function toggleQuestions() {
    const heizlastValue = document.getElementById("heizlast").value;
    const durchgef = document.getElementById("durchgef");
    const radioGroup2 = document.getElementById("radioGroup2");
    const scheitholzpos = document.getElementById("scheitholz")
    const submitButton = document.getElementById("submitButton");
    const eheizstabJa = document.getElementById("eheizstab")
    const scheitholzNe = document.getElementById("scheitholz")

    if (heizlastValue >= 17 && heizlastValue <= 25) {


        durchgef.style.display = "none";
        radioGroup2.style.display = "none";
        eheizstab.style.display = "inline-block";


    } else if (heizlastValue === "0") {
        durchgef.style.display = "inline-block";
        radioGroup2.style.display = "none";
        showRadioGroup2();

        eheizstab.style.display = "none";
        scheitholz.style.display = "none";
    } else {
        durchgef.style.display = "none";
        radioGroup2.style.display = "none";
        eheizstab.style.display = "none";
        scheitholz.style.display = "none";
    }
}

function showRadioGroup2() {

    const radioNein1 = document.getElementById("durchgefne");
    const radioJa2 = document.getElementById("hinreichenja");
    const hinreichenne = document.getElementById("hinreichenne");

    if (radioNein1.checked) {

        radioJa2.style.display = "inline-block";
        hinreichenne.style.display = "inline-block";
        document.getElementById("radioGroup2").style.display = "inline-block";
    } else {
        radioJa2.style.display = "none";
        hinreichenne.style.display = "none";
        document.getElementById("radioGroup2").style.display = "none";
    }
}
function toggleSubmitButton() {
    const hinreichenne = document.getElementById("hinreichenne");
    const submitButton = document.getElementById("submitButton");


    if (hinreichenne.checked) {
        submitButton.style.display = "block";
    } else {
        submitButton.style.display = "none";
    }
}

function showScheitholz(){
    document.getElementById("scheitholz").style.display = "inline-block";
    const EheizstabNein1 = document.getElementById("eheizstabne");
    const scheitholzJa = document.getElementById("scheitholzja");
    const scheitholzNe = document.getElementById("scheitholzne");
    const scheitholz = document.getElementById("scheitholz");

    if (EheizstabNein1.checked) {
        alert("hi");
    scheitholz.style.display = "inline-block";
        scheitholzJa.style.display = "inline-block";
        scheitholzNe.style.display = "inline-block";
        document.getElementById("scheitholz").style.display = "inline-block";
    } else {
        scheitholzJa.style.display = "none";
        scheitholzNe.style.display = "none";
        document.getElementById("radioGroup2").style.display = "none";
    }
}