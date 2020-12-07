/**
 * Megonesia Translate V.1
 * Copyright 2020 Rifki Ardiansyah - Megonesia
 */

var megoTranslateJSON;
var megoTranslateLanguage = "eng";
var megoTranslateBrowserLanguage =
  window.navigator.userLanguage || window.navigator.language;

const MegoTranslateLanguageAliases = {
  eng: "eng",
  english: "eng",
  id: "id",
  idn: "id",
  indonesia: "id",
  "id-id": "id",
  "id-indonesia": "id",
};

if (MegoTranslate != undefined && typeof (MegoTranslate) == "object") {
  megoTranslateJSON = MegoTranslate;
} else {
  console.error("Megonesia Translate (MegoTranslate must be of type Object)");
}

if (megoTranslateJSON) {
  var megoTranslateSetCookie = (name, value, days) => {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  var megoTranslateGetCookie = function (name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  var megoTranslateAll = function () {
    var elements = document.querySelectorAll("[data-mego-translate]");
    megoTranslateSetCookie("mego-translate-language", megoTranslateLanguage, 30);
    elements.forEach(function (item) {
      if (megoTranslateJSON[item.dataset.megoTranslate.toString().toLowerCase().trim()] && megoTranslateJSON[item.dataset.megoTranslate.toString().toLowerCase().trim()][megoTranslateLanguage]) {
        item.innerHTML = megoTranslateJSON[item.dataset.megoTranslate.toString().toLowerCase().trim()][megoTranslateLanguage];
      }
    });
  };

  if (megoTranslateGetCookie("mego-translate-language") && MegoTranslateLanguageAliases[megoTranslateGetCookie("mego-translate-language").toString().toLowerCase().trim()]) {
    megoTranslateLanguage = MegoTranslateLanguageAliases[megoTranslateGetCookie("mego-translate-language").toString().toLowerCase().trim()];
  } else if (megoTranslateBrowserLanguage && MegoTranslateLanguageAliases[megoTranslateBrowserLanguage.toString().toLowerCase().trim()]) {
    megoTranslateLanguage = MegoTranslateLanguageAliases[megoTranslateBrowserLanguage.toString().toLowerCase().trim()];
  }

  document.querySelectorAll('[data-mego-toggle="translate"]').forEach((item) => {
    item.addEventListener("click", function (e) {
      if (e && e.preventDefault) {
        e.preventDefault();
      }
      megoTranslateLanguage = MegoTranslateLanguageAliases[this.dataset.megoLanguage.toString().toLowerCase().trim()] ?? "eng";
      megoTranslateAll();
    });
  });

  megoTranslateAll();
}
