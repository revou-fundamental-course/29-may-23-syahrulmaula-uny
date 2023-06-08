// ini fungsi utk mendapatkan nilainya
function ValidityForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    // ini adalah kondisi kalo data yang kosong
    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        // alert ini utk memberi tahu user kalo fill kalo boleh kosong
        alert("Tidak boleh ada yang kosong!");
        // kalo kosong, false ini artinya codenya terhenti cuman sampe alert
        return false;
    }

    setSenderUI(name, birthDate, gender, messages);

    return false;
}

// ini fungsi untuk memindahkan nilanya ke form sebelahnya, disini formnya berada di sebelah kanan
function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}
