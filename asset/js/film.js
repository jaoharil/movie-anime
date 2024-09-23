$(document).ready(function () {
  // Dapatkan modal dan elemen close
  let modal = document.getElementById('filmModal');
  let span = document.getElementsByClassName('close')[0];

  // Ketika user mengklik <span> (x), tutup modal
  span.onclick = function () {
    modal.style.display = 'none';
  };

  // Ketika user mengklik di luar modal, tutup modal
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };

  // Menangkap tombol "Tonton Sekarang" secara dinamis setelah data AJAX dimuat
  $.ajax({
    url: 'http://www.omdbapi.com/?apikey=bdea113a&s=avengers',
    success: function (results) {
      const movies = results.Search;
      let cards = '';
      movies.forEach(function (m) {
        cards += `<div class="film-card">
          <div class="film-poster">
            <img src="${m.Poster}" alt="Film Poster 1" />
          </div>
          <div class="film-info">
            <h2 class="film-title">${m.Title}</h2>
            <p class="film-genre">Genre: ${m.Type}</p>
            <p class="film-genre">Year: ${m.Year}</p>
            <p class="film-rating">Rating: ★★★★☆</p>
            <p class="film-description">Ini adalah deskripsi singkat tentang film ini...</p>
            <button class="watch-now-btn">Tonton Sekarang</button>
          </div>
        </div>`;
      });

      // Menaruh data ke dalam class movie-container
      $('.movie-container').html(cards);

      // Tambahkan event listener untuk tombol setelah cards di-render
      $(document).on('click', '.watch-now-btn', function () {
        // Mendapatkan data film dari elemen terdekat
        let title = $(this).closest('.film-info').find('.film-title').text();
        let genre = $(this).closest('.film-info').find('.film-genre').first().text();
        let year = $(this).closest('.film-info').find('.film-genre').last().text();

        // Menaruh data tersebut ke dalam modal
        $('#filmTitle').text(title);
        $('#filmGenre').text(genre);
        $('#filmYear').text(year);

        // Menampilkan modal
        modal.style.display = 'block';
      });
    },
    error: function (e) {
      console.log(e.responseText);
    },
  });
});
