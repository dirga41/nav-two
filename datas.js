const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, orci nec feugiat commodo, ipsum orci consequat nulla, non sodales sem lorem et ante. Etiam dignissim tempor elit, nec feugiat ante suscipit eget. Sed imperdiet diam at ultrices viverra. Duis malesuada mattis tortor, ac ultrices elit euismod a.\n\nSuspendisse tincidunt eleifend volutpat. Phasellus vehicula sapien eu aliquam dignissim. Duis diam lorem, porta id nisi a, interdum rutrum quam. Suspendisse tincidunt euismod nunc. Etiam interdum, sem tincidunt sodales dignissim, orci ligula hendrerit dolor, ac suscipit neque eros sit amet magna. Sed gravida porttitor justo in venenatis. Maecenas dolor odio, semper eu velit pharetra, euismod placerat lectus. Curabitur nec aliquam mi. Aliquam suscipit iaculis vestibulum. Integer nibh ante, dignissim sed convallis eget, elementum ut nunc. Fusce non pharetra enim. Etiam ut justo est. Morbi commodo bibendum lorem a condimentum. Nulla ut magna tempor neque fringilla auctor. Ut aliquam ipsum urna, sodales ultricies ipsum pulvinar ac.\n\nNullam ultrices egestas dapibus. Vivamus sodales, nisl vel lobortis vestibulum, elit libero venenatis mauris, ut efficitur augue turpis ac lorem. Duis eu hendrerit ligula. Mauris auctor, purus ut ornare condimentum, ligula nisi egestas erat, eu fermentum libero massa tincidunt turpis. Suspendisse porta luctus elit eu pellentesque. Vivamus feugiat pellentesque hendrerit. Duis eu vulputate urna, quis bibendum nulla.\n\nPhasellus et faucibus elit, mollis accumsan arcu. Fusce scelerisque orci purus, vel scelerisque nisl viverra vitae. Nulla non lectus in lacus mollis consequat. Aenean consequat luctus tristique. Nunc imperdiet condimentum cursus. Praesent vel fermentum est, id pulvinar est. Nunc dolor velit, commodo non vehicula at, tincidunt lobortis mauris. Curabitur laoreet ipsum ut erat interdum ornare.";

const datas = [
  {
    id: 1,
    date: "10 Oktober 2023",
    title:
      "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2023/10/gedung-telu-1.png?lossy=2&strip=1&webp=1",
    content: content,
  },
  {
    id: 2,
    date: "10 Oktober 2023",
    title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2023/10/gedung-telu-1.png?lossy=2&strip=1&webp=1",
    content: content,
  },
  {
    id: 3,
    date: "10 Oktober 2023",
    title:
      "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2023/10/gedung-telu-1.png?lossy=2&strip=1&webp=1",
    content: content,
  },
  {
    id: 4,
    date: "10 Oktober 2023",
    title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2023/10/gedung-telu-1.png?lossy=2&strip=1&webp=1",
    content: content,
  },
  {
    id: 5,
    date: "10 Oktober 2023",
    title:
      "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2023/10/gedung-telu-1.png?lossy=2&strip=1&webp=1",
    content: content,
  },
  {
    id: 6,
    date: "10 Oktober 2023",
    title:
      "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2023/10/gedung-telu-1.png?lossy=2&strip=1&webp=1",
    content: content,
  },
  {
    id: 7,
    date: "10 Oktober 2023",
    title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2023/10/gedung-telu-1.png?lossy=2&strip=1&webp=1",
    content: content,
  },
  {
    id: 8,
    date: "10 Oktober 2023",
    title:
      "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2023/10/gedung-telu-1.png?lossy=2&strip=1&webp=1",
    content: content,
  },
  {
    id: 9,
    date: "10 Oktober 2023",
    title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2023/10/gedung-telu-1.png?lossy=2&strip=1&webp=1",
    content: content,
  },
  {
    id: 10,
    date: "10 Oktober 2023",
    title:
      "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2023/10/gedung-telu-1.png?lossy=2&strip=1&webp=1",
    content: content,
  },
  {
    id: 11,
    date: "10 Oktober 2023",
    title:
      "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2023/10/gedung-telu-1.png?lossy=2&strip=1&webp=1",
    content: content,
  },
  {
    id: 12,
    date: "10 Oktober 2023",
    title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2023/10/gedung-telu-1.png?lossy=2&strip=1&webp=1",
    content: content,
  },
  {
    id: 13,
    date: "10 Oktober 2023",
    title:
      "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2023/10/gedung-telu-1.png?lossy=2&strip=1&webp=1",
    content: content,
  },
  {
    id: 14,
    date: "10 Oktober 2023",
    title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2023/10/gedung-telu-1.png?lossy=2&strip=1&webp=1",
    content: content,
  },
  {
    id: 15,
    date: "10 Oktober 2023",
    title:
      "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2023/10/gedung-telu-1.png?lossy=2&strip=1&webp=1",
    content: content,
  },
  {
    id: 16,
    date: "10 Oktober 2023",
    title:
      "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2023/10/gedung-telu-1.png?lossy=2&strip=1&webp=1",
    content: content,
  },
  {
    id: 17,
    date: "10 Oktober 2023",
    title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2023/10/gedung-telu-1.png?lossy=2&strip=1&webp=1",
    content: content,
  },
  {
    id: 18,
    date: "10 Oktober 2023",
    title:
      "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2023/10/gedung-telu-1.png?lossy=2&strip=1&webp=1",
    content: content,
  },
  {
    id: 19,
    date: "10 Oktober 2023",
    title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2023/10/gedung-telu-1.png?lossy=2&strip=1&webp=1",
    content: content,
  },
  {
    id: 20,
    date: "10 Oktober 2023",
    title:
      "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2023/10/gedung-telu-1.png?lossy=2&strip=1&webp=1",
    content: content,
  },
];

export default datas;
