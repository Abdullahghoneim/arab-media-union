import { Injectable } from "@angular/core";

@Injectable()
export class ArabWorldService {
  arabCountreys = [
    {
      country: "الإمارات العربية المتحدة ",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/23px-Flag_of_the_United_Arab_Emirates.svg.png"
    },
    {
      country: "البحريين ",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Bahrain.svg/23px-Flag_of_Bahrain.svg.png"
    },
    {
      country: "الكويت ",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Kuwait.svg/23px-Flag_of_Kuwait.svg.png"
    },
    {
      country: " السعودية ",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/23px-Flag_of_Saudi_Arabia.svg.png"
    },
    {
      country: "عمان",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Oman.svg/23px-Flag_of_Oman.svg.png"
    },
    {
      country: "قطر ",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/23px-Flag_of_Qatar.svg.png"
    },
    {
      country: "اليمن ",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/23px-Flag_of_Yemen.svg.png"
    },
    {
      country: "مصر ",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/23px-Flag_of_Egypt.svg.png"
    },
    {
      country: "السودان",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Sudan.svg/23px-Flag_of_Sudan.svg.png"
    },
    {
      country: "ليبيا",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Libya.svg/23px-Flag_of_Libya.svg.png"
    },
    {
      country: "تونس",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/23px-Flag_of_Tunisia.svg.png"
    },
    {
      country: "الجزائر",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/23px-Flag_of_Algeria.svg.png"
    },
    {
      country: "المغرب",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/23px-Flag_of_Morocco.svg.png"
    },
    {
      country: "الاردن",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/23px-Flag_of_Jordan.svg.png"
    },
    {
      country: "فلسطين",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/23px-Flag_of_Palestine.svg.png"
    }
  ];
  getCountrys() {
    return this.arabCountreys;
  }
}
