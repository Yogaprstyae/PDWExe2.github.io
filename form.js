function KirimData() {
    var nama = document.getElementById("nama").value
    var mail = document.getElementById("mail").value
    var nomer = document.getElementById("nomer").value
    var kelamin = document.querySelector("input[name=jenis_kelamin]:checked").value
    var tanggal = document.getElementById("tanggal").value
    var alasan = document.getElementById("alasan").value
    var domisili = document.getElementById("domisili").value
    
    alert(
        "Nama : " + nama +
        "\nE-mail : " + mail +
        "\nNomer WA : " + nomer +
        "\nTanggal Lahir : " + tanggal +
        "\nJenis Kelamin : " + kelamin +
        "\nDomisili : " + domisili +
        "\nAlasan : " + alasan
        )
}