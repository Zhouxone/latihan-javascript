function selesaikanTugas(tugas, callback) {
    console.log("menyelesaikan tugas" + tugas)
    callback()
}

function tugasSelesai() {
    console.log("Tugas selsesai")
}

selesaikanTugas("Belajar Javascript", tugasSelesai)