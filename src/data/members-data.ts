/**
 * src/data/members-data.ts
 * Data lokal anggota Cloudsi — digunakan sebagai sumber data utama
 * Foto: public/members/{id}.jpg
 * Urutan: Pengurus Inti → DEV (Srilintang) → Anggota by NIM ascending
 */

import type { Member } from '../types/index';

export const MEMBERS_DATA: Member[] = [
  // === PENGURUS INTI (Posisi 1-6) ===
  { id: "1001", full_name: "Phasacola Grey Kalista", nickname: "Phasacola", role: "Ketua", quote: "", photo_url: "/members/1001.webp", social_ig: "https://www.instagram.com/phasacola?igsh=azlhNzRiZHYxMWdl", social_in: "phasacola-grey", social_gh: "https://github.com/Phasacola25", is_visible: true },
  { id: "1003", full_name: "Ellen Fitri Shanika Karrin Malau", nickname: "Ellen", role: "Sekretaris", quote: "", photo_url: "/members/1003.webp", social_ig: "https://www.instagram.com/shaskyrell8?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", social_in: "ellen-fitri-shanika", social_gh: "https://github.com/elfishakar87", is_visible: true },
  { id: "1004", full_name: "Dhini Zakiyatul Wafa", nickname: "Dhini", role: "Sekretaris", quote: "", photo_url: "/members/1004.webp", social_ig: "https://www.instagram.com/zkwaf.xz?igsh=NTJqaTFqcm96dTg2", social_in: "dhini-zakiyatul-wafa", is_visible: true },
  { id: "1005", full_name: "Syarifah Putri", nickname: "Syarifah", role: "Bendahara", quote: "", photo_url: "/members/1005.webp", social_ig: "https://www.instagram.com/syarifahpuutri/", social_in: "syarifah-putri", is_visible: true },
  { id: "1006", full_name: "Andini Putri Malaya", nickname: "Andini", role: "Bendahara", quote: "", photo_url: "/members/1006.webp", social_ig: "https://www.instagram.com/layaaya__?igsh=ajlrMm5zcXJiNzdv", social_in: "andini-putri-malaya", is_visible: true },

  // === DEV — Posisi 7 (Baris 2 Kolom 3) ===
  { id: "1024", full_name: "Muhammad Sholichin Tafsir Srilintang", nickname: "Srilintang", role: "FULLS", quote: "", photo_url: "/members/1024.webp", social_ig: "https://www.instagram.com/srilintang_/", social_in: "https://www.linkedin.com/in/muhamad-sholichin-tafsir-srilintang-b89867379/?skipRedirect=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BpCER9gozQuK0wfkqOfftKA%3D%3D", social_gh: "https://github.com/MStafsir", is_visible: true },

  // === ANGGOTA — Diurutkan berdasarkan NIM terkecil ke terbesar ===
  // NIM: H1101251002
  { id: "1017", full_name: "Nova Amelia", nickname: "Nova", role: "Anggota", quote: "", photo_url: "/members/1017.webp", social_ig: "https://www.instagram.com/_____novaaaa?igsh=MTY2OWQ3czBuMmdsZw==", social_in: "nova-amelia", is_visible: true },
  // NIM: H1101251003
  { id: "1025", full_name: "M. Hafizh Al Fitra", nickname: "Hafizh", role: "Anggota", quote: "", photo_url: "/members/1025.webp", social_ig: "https://www.instagram.com/apiz_o2?igsh=a3ZjYXhlNzY5M3Ux", social_in: "hafizh-al-fitra", is_visible: true },
  // NIM: H1101251004
  { id: "1026", full_name: "Dimas Luthfi Salim", nickname: "Dimas", role: "Anggota", quote: "", photo_url: "/members/1026.webp", social_ig: "https://www.instagram.com/diimmrlyn?igsh=dGc5YmViamVwZGFx", social_in: "dimas-luthfi-salim", is_visible: true },
  // NIM: H1101251006
  { id: "1014", full_name: "Sri Wahyuni", nickname: "Sri", role: "Anggota", quote: "", photo_url: "/members/1014.webp", social_ig: "https://www.instagram.com/sriwwhn?igsh=NzQyaDJlOHloeG93", social_in: "sri-wahyuni", is_visible: true },
  // NIM: H1101251007
  { id: "1027", full_name: "Neisya Fadilla", nickname: "Neisya", role: "Anggota", quote: "", photo_url: "/members/1027.webp", social_ig: "https://www.instagram.com/nsa.sya/", social_in: "neisya-fadilla", is_visible: true },
  // NIM: H1101251008
  { id: "1028", full_name: "Akmal Pasha", nickname: "Akmal", role: "Anggota", quote: "", photo_url: "/members/1028.webp", social_ig: "https://www.instagram.com/im_arnev/", social_in: "akmal-pasha", social_gh: "https://github.com/ImArnev", is_visible: true },
  // NIM: H1101251009
  { id: "1029", full_name: "Fahriello Ardhayana", nickname: "Fahriello", role: "Anggota", quote: "", photo_url: "/members/1029.webp", social_ig: "https://www.instagram.com/riloo._?igsh=NTUzbTdodTQxd3Ew", social_in: "fahriello-ardhayana", is_visible: true },
  // NIM: H1101251010
  { id: "1016", full_name: "Nasywa Akmalia Hanif", nickname: "Nasywa", role: "Anggota", quote: "", photo_url: "/members/1016.webp", social_ig: "https://www.instagram.com/nnassh._?igsh=NmgxeG12aWhrNXNm", social_in: "nasywa-akmalia-hanif", is_visible: true },
  // NIM: H1101251011
  { id: "1030", full_name: "Gendis Setyawan Putri", nickname: "Gendis", role: "Anggota", quote: "", photo_url: "/members/1030.webp", social_ig: "https://www.instagram.com/genndisn/", social_in: "gendis-setyawan", is_visible: true },
  // NIM: H1101251012
  { id: "1031", full_name: "Charles Wong", nickname: "Charles", role: "Anggota", quote: "", photo_url: "/members/1031.webp", social_ig: "https://www.instagram.com/chrleswg?igsh=MXVlM25sanY4NzY3dw==", social_in: "charles-wong", social_gh: "https://github.com/charlesswg", is_visible: true },
  // NIM: H1101251015
  { id: "1032", full_name: "Ahmad Rahman N.S.", nickname: "Ahmad", role: "Anggota", quote: "", photo_url: "/members/1032.webp", social_ig: "https://www.instagram.com/rahmnsye?igsh=MXd0dTA0N2o3bGN1ag%3D%3D&utm_source=qr", social_in: "ahmad-rahman", is_visible: true },
  // NIM: H1101251017
  { id: "1033", full_name: "M. Hizbullah Pohan", nickname: "Hizbullah", role: "Anggota", quote: "", photo_url: "/members/1033.webp", social_ig: "", social_in: "hizbullah-pohan", social_gh: "https://github.com/Nasa-kun17", is_visible: true },
  // NIM: H1101251018
  { id: "1034", full_name: "Tiara Maritza", nickname: "Tiara", role: "Anggota", quote: "", photo_url: "/members/1034.webp", social_ig: "https://www.instagram.com/tiaramrtzaa?igsh=M2U0OHM1OWRjNTE3", social_in: "tiara-maritza", is_visible: true },
  // NIM: H1101251019
  { id: "1035", full_name: "Shinta Ayuwidati", nickname: "Shinta", role: "Anggota", quote: "", photo_url: "/members/1035.webp", social_ig: "https://www.instagram.com/shntayyu/", social_in: "shinta-ayuwidati", is_visible: true },
  // NIM: H1101251021
  { id: "1036", full_name: "M. Iqbal Dzakwani", nickname: "Iqbal", role: "Anggota", quote: "", photo_url: "/members/1036.webp", social_ig: "https://www.instagram.com/iqbll_d?igsh=MWk2c3ZyeThsajJ5YQ==", social_in: "iqbal-dzakwani", is_visible: true },
  // NIM: H1101251022
  { id: "1023", full_name: "Muhammad Ghifari Rubiyanto", nickname: "Ghifari", role: "Anggota", quote: "", photo_url: "/members/1023.webp", social_ig: "https://www.instagram.com/ghifari.rbyto?igsh=dzMwM2NvZHMwY3c=", social_in: "ghifari-rubiyanto", is_visible: true },
  // NIM: H1101251023
  { id: "1015", full_name: "Desty Ayudya", nickname: "Desty", role: "Anggota", quote: "", photo_url: "/members/1015.webp", social_ig: "https://www.instagram.com/pinkshvangogh/", social_in: "desty-ayudya", is_visible: true },
  // NIM: H1101251024
  { id: "1037", full_name: "Uray Diana", nickname: "Diana", role: "Anggota", quote: "", photo_url: "/members/1037.webp", social_ig: "https://www.instagram.com/uraydiana17?igsh=MWxlMXg5a24yOWoydg==", social_in: "uray-diana", is_visible: true },
  // NIM: H1101251025
  { id: "1038", full_name: "Lia Rarasari", nickname: "Lia", role: "Anggota", quote: "", photo_url: "/members/1038.webp", social_ig: "https://www.instagram.com/lia_rarsri16?igsh=NDVianRpeTF3bnJw", social_in: "lia-rarasari", is_visible: true },
  // NIM: H1101251026
  { id: "1039", full_name: "Derriel Mulya Ramadhan", nickname: "Derriel", role: "Anggota", quote: "", photo_url: "/members/1039.webp", social_ig: "https://www.instagram.com/drlhysm?igsh=eGdsbGVlejhmaDN6", social_in: "derriel-mulya-ramadhan", is_visible: true },
  // NIM: H1101251028
  { id: "1040", full_name: "Utin Dita Atyana", nickname: "Utin", role: "Anggota", quote: "", photo_url: "/members/1040.webp", social_ig: "https://www.instagram.com/ataaryn_?igsh=Zm9vcWJpMzd6MzVk", social_in: "utin-dita-atyana", is_visible: true },
  // NIM: H1101251029
  { id: "1009", full_name: "Ferdi", nickname: "Ferdi", role: "Anggota", quote: "", photo_url: "/members/1009.webp", social_ig: "https://www.instagram.com/tutu.ferdi?igsh=bXh2cDQyM2hsMzd3", social_in: "ferdi", social_gh: "https://github.com/punya-Fe", is_visible: true },
  // NIM: H1101251030
  { id: "1007", full_name: "Najwa Aulia Putri", nickname: "Najwa", role: "Anggota", quote: "", photo_url: "/members/1007.webp", social_ig: "https://www.instagram.com/njwaauptrii_", social_in: "najwa-aulia-putri", is_visible: true },
  // NIM: H1101251031
  { id: "1020", full_name: "Syarif Hizra Muhammad Zacky", nickname: "Syarif", role: "Anggota", quote: "", photo_url: "/members/1020.webp", social_ig: "https://www.instagram.com/rivelza.zkysan?igsh=MW41NHRwaDZpMWI1ZQ%3D%3D&utm_source=qr", social_in: "syarif-hizra-zacky", is_visible: true },
  // NIM: H1101251032
  { id: "1041", full_name: "Rezki Firmansyah", nickname: "Rezki", role: "Anggota", quote: "", photo_url: "/members/1041.webp", social_ig: "https://www.instagram.com/headless_dreamer100?igsh=MThyczE2eDA1NjV3bA==", social_in: "rezki-firmansyah", social_gh: "https://github.com/headlesstor7", is_visible: true },
  // NIM: H1101251033
  { id: "1042", full_name: "Alfonsius Pernandes Roby", nickname: "Alfonsius", role: "Anggota", quote: "", photo_url: "/members/1042.webp", social_ig: "https://www.instagram.com/alfonzhs.robb?igsh=MWxsN3JrbmJ0eWhydA==", social_in: "alfonsius-pernandes-roby", is_visible: true },
  // NIM: H1101251034
  { id: "1043", full_name: "Chelsea Zalianti", nickname: "Chelsea", role: "Anggota", quote: "", photo_url: "/members/1043.webp", social_ig: "https://www.instagram.com/cseazln?igsh=bDY5YzRiOWV0ancz&utm_source=qr", social_in: "chelsea-zalianti", is_visible: true },
  // NIM: H1101251035
  { id: "1044", full_name: "Muhammad Farras Haidar Revanezka", nickname: "Farras", role: "DEV", quote: "", photo_url: "/members/1044.webp", social_ig: "https://www.instagram.com/prazz.sh/", social_in: "https://www.linkedin.com/in/mfrsha/", social_gh: "https://github.com/aerthaze", is_visible: true },
  // NIM: H1101251036
  { id: "1045", full_name: "Deslo Aldo Anggoro", nickname: "Deslo", role: "Anggota", quote: "", photo_url: "/members/1045.webp", social_ig: "https://www.instagram.com/desloal?igsh=MXkxcXFoMzZiaXhvNw==", social_in: "deslo-aldo-anggoro", social_gh: "https://github.com/DesloAl", is_visible: true },
  // NIM: H1101251038
  { id: "1046", full_name: "Marcello Januarius Erick", nickname: "Marcello", role: "Anggota", quote: "", photo_url: "/members/1046.webp", social_ig: "https://www.instagram.com/marcjrk?igsh=MWhzbmRsM2s4dDZ6cA==", social_in: "mercello-januarius-erick", is_visible: true },
  // NIM: H1101251039
  { id: "1011", full_name: "Nikoleta Febrina Listya Priyono", nickname: "Nikoleta", role: "Anggota", quote: "", photo_url: "/members/1011.webp", social_ig: "https://www.instagram.com/feat.listy?igsh=OHl4cTFtcnVvZTR1", social_in: "nikoleta-febrina-listy", is_visible: true },
  // NIM: H1101251040
  { id: "1047", full_name: "Nabila Pracita Ramadhanti", nickname: "Nabila", role: "Anggota", quote: "", photo_url: "/members/1047.webp", social_ig: "https://www.instagram.com/nblaprct?igsh=MTR3OWU1bWFqN3VqZA%3D%3D&utm_source=qr", social_in: "nabila-pracita-ramadhanti", is_visible: true },
  // NIM: H1101251041
  { id: "1048", full_name: "Rasya Akmal Sakhi", nickname: "Rasya", role: "Anggota", quote: "", photo_url: "/members/1048.webp", social_ig: "https://www.instagram.com/rsya.ll", social_in: "https://www.linkedin.com/in/rasya-akmal/", social_gh: "https://github.com/Sakiih", is_visible: true },
  // NIM: H1101251042
  { id: "1049", full_name: "Riton Stefano", nickname: "Riton", role: "Anggota", quote: "", photo_url: "/members/1049.webp", social_ig: "https://www.instagram.com/rxstf_67?igsh=dnRoZzQ3NjJnZGxm", social_in: "riton-stefano", is_visible: true },
  // NIM: H1101251043
  { id: "1050", full_name: "Novitasari", nickname: "Novita", role: "Anggota", quote: "", photo_url: "/members/1050.webp", social_ig: "https://www.instagram.com/vitazsrr?igsh=MXF1NzUxcDJhdWhuYg%3D%3D&utm_source=qr", social_in: "novitasari", is_visible: true },
  // NIM: H1101251044
  { id: "1022", full_name: "Zahratussita", nickname: "Zahra", role: "Anggota", quote: "", photo_url: "/members/1022.webp", social_ig: "https://www.instagram.com/ztstt_?igsh=MTRrNWx5MGFqemwwMg==", social_in: "zahratussita", is_visible: true },
  // NIM: H1101251045
  { id: "1010", full_name: "Felix Faustine", nickname: "Felix", role: "Anggota", quote: "", photo_url: "/members/1010.webp", social_ig: "", social_in: "felix-faustine", is_visible: true },
  // NIM: H1101251046
  { id: "1021", full_name: "Aldan Putra Setiawan", nickname: "Aldan", role: "Anggota", quote: "", photo_url: "/members/1021.webp", social_ig: "", social_in: "aldan-putra-setiawan", is_visible: true },
  // NIM: H1101251047
  { id: "1051", full_name: "Melly", nickname: "Melly", role: "Anggota", quote: "", photo_url: "/members/1051.webp", social_ig: "https://www.instagram.com/mellyanp.r?igsh=dHFhN3dzdnlsZGt3&utm_source=qr", social_in: "melly", is_visible: true },
  // NIM: H1101251048
  { id: "1052", full_name: "Hubert Melville Prince M.", nickname: "Hubert", role: "Anggota", quote: "", photo_url: "/members/1052.webp", social_ig: "https://www.instagram.com/melvlls?igsh=MTRhdWh1aW1mZmZ2Zg==", social_in: "hubert-melville-prince", is_visible: true },
  // NIM: H1101251049
  { id: "1053", full_name: "Raihan Ikram Maulana", nickname: "Raihan", role: "Anggota", quote: "", photo_url: "/members/1053.webp", social_ig: "https://www.instagram.com/raihanikram_?igsh=MTQyOHl1MTVlNm04dQ%3D%3D&utm_source=qr", social_in: "https://www.linkedin.com/in/raihan-ikram-maulana-28621a34a/", social_gh: "https://github.com/RaihanIkram", is_visible: true },
  // NIM: H1101251050
  { id: "1054", full_name: "Wilham Dhani Prasetyo", nickname: "Wilham", role: "Anggota", quote: "", photo_url: "/members/1054.webp", social_ig: "https://www.instagram.com/wilham.wdp?igsh=MXc1cmdheThjdzBtNQ==", social_in: "wilham-dhani-prasetyo", social_gh: "https://github.com/LoliFE-Studio", is_visible: true },
  // NIM: H1101251051
  { id: "1055", full_name: "Adli Anara Sofian", nickname: "Adli", role: "Anggota", quote: "", photo_url: "/members/1055.webp", social_ig: "https://www.instagram.com/adlianara?igsh=NTUzbTdodTQxd3Ew", social_in: "adli-anara-sofian", social_gh: "https://github.com/adlianara", is_visible: true },
  // NIM: H1101251053
  { id: "1056", full_name: "Velixza Gracia E.", nickname: "Velixza", role: "Anggota", quote: "", photo_url: "/members/1056.webp", social_ig: "", social_in: "velixza-gracia", is_visible: true },
  // NIM: H1101251054
  { id: "1013", full_name: "Fitri Amelia Oktaviani", nickname: "Fitri", role: "Anggota", quote: "", photo_url: "/members/1013.webp", social_ig: "https://www.instagram.com/ccaramelz?igsh=MTE0dHZyYTh2aWI4aw==", social_in: "fitri-amelia-oktaviani", is_visible: true },
  // NIM: H1101251055
  { id: "1057", full_name: "Aiffy Ragta A.", nickname: "Aiffy", role: "Anggota", quote: "", photo_url: "/members/1057.webp", social_ig: "https://www.instagram.com/arctaa/", social_in: "aiffy-ragta", is_visible: true },
  // NIM: H1101251056
  { id: "1008", full_name: "Chayara Alima", nickname: "Chayara", role: "Anggota", quote: "", photo_url: "/members/1008.webp", social_ig: "https://www.instagram.com/chaaayyr?igsh=YWtyYnV4anhidzN4", social_in: "chayara-alima", is_visible: true },
  // NIM: H1101251057
  { id: "1012", full_name: "Khairunisa Ansyari Ramadhan", nickname: "Khairunisa", role: "Anggota", quote: "", photo_url: "/members/1012.webp", social_ig: "https://www.instagram.com/khacikaa?igsh=MTM1amw1bGc0NTdnbQ%3D%3D&utm_source=qr", social_in: "khairunisa-ansyari", is_visible: true },
  // NIM: H1101251058
  { id: "1077", full_name: "Novi Aulia", nickname: "Novi", role: "Anggota", quote: "", photo_url: "/members/1077.webp", social_ig: "https://www.instagram.com/_nvauliaaa?igsh=MWxzc3RkdjNsaDc0dQ==", social_in: "khairunisa-ansyari", is_visible: true },
  // NIM: H1101251058
  { id: "1019", full_name: "Lika Lidia Astutik", nickname: "Lika", role: "Anggota", quote: "", photo_url: "/members/1019.webp", social_ig: "https://www.instagram.com/likaaldast?igsh=MTJ4YTk0M3VpYzA0bg%3D%3D&utm_source=qr", social_in: "lika-lidia-astutik", is_visible: true },
  // NIM: H1101251060
  { id: "1059", full_name: "M. Dimas Aditya", nickname: "Dimas A.", role: "Anggota", quote: "", photo_url: "/members/1059.webp", social_ig: "https://www.instagram.com/dimaadty", social_in: "dimas-aditya", is_visible: true },
  // NIM: H1101251061
  { id: "1060", full_name: "Rizqi Ikhwani", nickname: "Rizqi", role: "Anggota", quote: "", photo_url: "/members/1060.webp", social_ig: "https://www.instagram.com/rizqwnii_12?igsh=MXVzaWZ3OGR5cTBtbA==", social_in: "rizqi-ikhwani", is_visible: true },
  // NIM: H1101251062
  { id: "1061", full_name: "Iren Meiliani Taslim", nickname: "Iren", role: "Anggota", quote: "", photo_url: "/members/1061.webp", social_ig: "https://www.instagram.com/irnnn_21?igsh=M3Fpcnc4cXVmem1y", social_in: "iren-meiliani-taslim", is_visible: true },
  // NIM: H1101251063
  { id: "1062", full_name: "Maulana Malik Ibrahim", nickname: "Maulana", role: "Anggota", quote: "", photo_url: "/members/1062.webp", social_ig: "https://www.instagram.com/maulanamllk_?igsh=MTd0aTR1bWNvOXBpNA==", social_in: "maulana-malik-ibrahim", is_visible: true },
  // NIM: H1101251064
  { id: "1063", full_name: "Elki Donggala", nickname: "Elki", role: "Anggota", quote: "", photo_url: "/members/1063.webp", social_ig: "https://www.instagram.com/elkii_d?igsh=aDFmY3R5OTJ2dnp1", social_in: "elki-donggala", is_visible: true },
  // NIM: H1101251065
  { id: "1064", full_name: "Riko", nickname: "Riko", role: "Anggota", quote: "", photo_url: "/members/1064.webp", social_ig: "https://www.instagram.com/rikqyou?igsh=eWFlNWhxNG43bG04", social_in: "riko", is_visible: true },
  // NIM: H1101251066
  { id: "1065", full_name: "Andini Salsabilla", nickname: "Andini S.", role: "Anggota", quote: "", photo_url: "/members/1065.webp", social_ig: "https://www.instagram.com/dinisyblaa?igsh=YnQzYzY1cGZkMjlr&utm_source=qr", social_in: "andini-salsabilla", is_visible: true },
  // NIM: H1101251067
  { id: "1066", full_name: "Luqmanurhakim", nickname: "Luqman", role: "Anggota", quote: "", photo_url: "/members/1066.webp", social_ig: "https://www.instagram.com/nerf.hakim?igsh=MXB3cm54c2FhbmZ1bQ==", social_in: "luqmanurhakim", social_gh: "https://github.com/kimzgithub", is_visible: true },
  // NIM: H1101251068
  { id: "1067", full_name: "Zuhayr Aljabar", nickname: "Zuhayr", role: "Anggota", quote: "", photo_url: "/members/1067.webp", social_ig: "https://www.instagram.com/juherr1.12?igsh=a2ZraDY3Nmx1dzEw", social_in: "zuhayr-aljabar", social_gh: "https://github.com/zuhayraljabar", is_visible: true },
  // NIM: H1101251069
  { id: "1068", full_name: "Chattama Albiantoro", nickname: "Chattama", role: "Anggota", quote: "", photo_url: "/members/1068.webp", social_ig: "https://www.instagram.com/chttmaa/", social_in: "https://www.linkedin.com/in/chattama-albiantoro", is_visible: true },
  // NIM: H1101251070
  { id: "1069", full_name: "Khalindra Maulita S.", nickname: "Khalindra", role: "Anggota", quote: "", photo_url: "/members/1069.webp", social_ig: "https://www.instagram.com/_klnmltsyftri?igsh=MXFiNmFnZXI0MmEzaQ==", social_in: "khalindra-maulita", is_visible: true },
  // NIM: H1101251071
  { id: "1018", full_name: "Vita Ervina Dzalfa", nickname: "Vita", role: "Anggota", quote: "", photo_url: "/members/1018.webp", social_ig: "https://www.instagram.com/vitadzalfaa?igsh=MXE0dDc0cjByMDFmbA==", social_in: "vita-ervina-dzalfa", is_visible: true },
  // NIM: H1101251072
  { id: "1070", full_name: "Alnelka Parisha N.", nickname: "Alnelka", role: "Anggota", quote: "", photo_url: "/members/1070.webp", social_ig: "", social_in: "alnelka-parisha", is_visible: true },
  // NIM: H1101251073
  { id: "1071", full_name: "Ibnu Khaidir Rahman", nickname: "Ibnu", role: "Anggota", quote: "", photo_url: "/members/1071.webp", social_ig: "https://www.instagram.com/03.00.a_m?igsh=MWF2dTFpZ21sYzR3ZQ%3D%3D&utm_source=qr", social_in: "ibnu-khaidir-rahman", social_gh: "https://github.com/rkyt-papua", is_visible: true },
  // NIM: H1101251074
  { id: "1072", full_name: "Bona Tua Sagala", nickname: "Bona", role: "Anggota", quote: "", photo_url: "/members/1072.webp", social_ig: "https://www.instagram.com/bonz_gala/", social_in: "bona-tua-sagala", is_visible: true },
  // NIM: H1101251075
  { id: "1073", full_name: "Maulana Ardhi", nickname: "Ardhi", role: "Anggota", quote: "", photo_url: "/members/1073.webp", social_ig: "", social_in: "maulana-ardhi", is_visible: true },
  // NIM: H1101251076
  { id: "1074", full_name: "Pierre Tristan L.", nickname: "Pierre", role: "Anggota", quote: "", photo_url: "/members/1074.webp", social_ig: "https://www.instagram.com/titancloss?igsh=MTh5a3RxaXRhajAzaQ==", social_in: "pierre-tristan", is_visible: true },
  // NIM: H1101251077
  { id: "1075", full_name: "Indra Prianto", nickname: "Indra", role: "Anggota", quote: "", photo_url: "/members/1075.webp", social_ig: "", social_in: "indra-prianto", is_visible: true },
  // NIM: H1101251078
  { id: "1076", full_name: "Febriano Farrel Naufal", nickname: "Febriano", role: "Anggota", quote: "", photo_url: "/members/1076.webp", social_ig: "https://www.instagram.com/oldest_dreammmmm?igsh=OW4zajI4eGo3ZDU=", social_in: "febriano-farrel-naufal", is_visible: true },
];
