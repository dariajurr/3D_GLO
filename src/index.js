"use strict";
import "@babel/polyfill";
import "nodelist-foreach-polyfill";
import elementClosest from "element-closest";
elementClosest(window);
import "formdata-polyfill";
import "es6-promise";
import countTimer from "./modules/countTimer";
import toggleMenu from "./modules/toggleMenu";
import toglePopup from "./modules/toglePopup";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import ourTeam from "./modules/ourTeam";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";

//таймер
countTimer("22 september 2020");
//меню
toggleMenu();
//popup
toglePopup();
//табы
tabs();
//слайдер
slider();
//Наша команда
ourTeam();
//калькулятор
calc(100);
//sense-ajax-form
sendForm();