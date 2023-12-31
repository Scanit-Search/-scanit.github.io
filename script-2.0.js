function aramaYap() {
  var aramaKutusu = document.getElementById("arama-kutusu");
  var aramaSonucu = document.getElementById("sonuclar");

  var aramaUrl = aramaKutusu.value + ".com.tr";
  var youtubeUrl = "https://youtube.com/search?q=" + aramaKutusu.value;

  aramaSonucu.innerHTML = ""; // Clear any existing results

  var aramaLinki = document.createElement("li");
  var aramaLinkiA = document.createElement("a");
  aramaLinkiA.href = aramaUrl;
  aramaLinkiA.textContent = aramaUrl;
  aramaLinki.appendChild(aramaLinkiA);
  aramaSonucu.appendChild(aramaLinki);

  var youtubeLinki = document.createElement("li");
  var youtubeLinkiA = document.createElement("a");
  youtubeLinkiA.href = youtubeUrl;
  youtubeLinkiA.textContent = "YouTube'da Ara";
  youtubeLinki.appendChild(youtubeLinkiA);
  aramaSonucu.appendChild(youtubeLinki);
}

document.getElementById("arama-butonu").addEventListener("click", aramaYap);
