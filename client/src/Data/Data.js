// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
  UilBright,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Ana Sayfa",
    link:"/",
  },
  {
    icon: UilClipboardAlt,
    heading: "Bloglarım",
    link:"/Blog",
  },
  {
    icon: UilBright,
    heading: "Ayarlar",
    link:"/Ayarlar",
  },
];


// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Başlıyoruz !!!",
    noti: "Blog yazılarımı burada paylaşacağım .",
    time: "25 saniye önce",
  },
  {
    img: img2,
    name: "Blog Yazarı Nasıl Olunur ?",
    noti: "olmak için belli bir eğitim almak gerekmez. Yazarlık yeteneği olan ve bilgisayar kullanımına hakim olan herkes bu mesleği icra edebilir.",
    time: "30 dakika önce",
  },
  {
    img: img3,
    name: "React ile Proje Geliştirmek",
    noti: " React, uygulama mimarisi ve planı çıkartmak için gerçekten muazzam bir kütüphane.",
    time: "2 saat önce",
  },
];
