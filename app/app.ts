
//@ts-ignore
import 'shepherd.js/dist/css/shepherd.css';
import Shepherd from 'shepherd.js';

import { NegociacaoController } from "./controller/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
//@ts-ignore
form.addEventListener('submit', event =>{
    event.preventDefault();
    controller.adiciona();
});

const tour = new Shepherd.Tour({
    useModalOverlay: true,
    defaultStepOptions: {
      classes: 'shadow-md bg-purple-dark',
      scrollTo: true
    }
  });
tour.addStep({
    id: 'example step',
    text: "This is where you will learn about us.",
    attachTo: {
        element: '#data',  // Seleciona o campo de data
        on: 'top'
    },
    buttons: [
        {
            text: 'Próximo',
            action: tour.next
        },
        {
            text: 'Voltar',
            action: tour.back
        }
    ]
});
tour.start();