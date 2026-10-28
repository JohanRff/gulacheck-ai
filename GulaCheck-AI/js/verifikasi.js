// Analisis awal berbasis aturan sederhana, bukan model AI terlatih.
// Aturan dan indikator harus divalidasi dengan produsen/narasumber yang kompeten.
function analyzeProduct(data) {
  const indicators = [data.color, data.texture, data.aroma];
  const known = indicators.filter(value => value !== "unknown").length;
  const mismatch = indicators.filter(value => value === "berbeda").length;
  const processKnown = data.process === "tercatat";

  let status, explanation, style;
  if (known < 2 || !processKnown) {
    status = "Data belum cukup";
    explanation = "Lengkapi informasi indikator dan proses produksi, atau minta pemeriksaan dari narasumber yang kompeten.";
    style = "warn";
  } else if (mismatch > 0) {
    status = "Perlu pemeriksaan lanjut";
    explanation = "Ada indikator yang berbeda dari keterangan acuan. Perbedaan ini bukan bukti otomatis bahwa produk palsu.";
    style = "bad";
  } else {
    status = "Sesuai indikator yang diisi";
    explanation = "Data yang dimasukkan tidak menunjukkan perbedaan pada indikator yang diperiksa. Hasil ini bukan sertifikasi keaslian.";
    style = "good";
  }

  return { status, explanation, style, known, mismatch, processKnown };
}
