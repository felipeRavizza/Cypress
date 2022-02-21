///<reference types="cypress" />

import Jsonplaceholder from "../pages/Jsonplaceholder";

let GUIDE_HREF = 'a[href*="/guide"][class="mr-4 no-underline"]';

describe('Json Place Holder',()=>{

    it('Deve acessar o link do Jsonplaceholder, Acessar o menu Guide ',()=>{
        const Json= new Jsonplaceholder;
        Json.acessarTela();
        cy.get(GUIDE_HREF).click();
    });

    it('Deve capturar os dados exibidos em tela e salvá-los num array JSON',()=>{
        //cy.expectValidJsonWithMinimumLength('/albums/1/photos',6);
        let  datalist = [];
        fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
            .then((response) => response.json())
            .then((json) => {
                expect(json[5].albumId).to.eq(1)
                expect(json[5].id).to.eq(6)
                expect(json[5].title).to.eq('accusamus ea aliquid et amet sequi nemo')
                expect(json[5].url).to.eq('https://via.placeholder.com/600/56a8c2')
                expect(json[5].thumbnailUrl).to.eq('https://via.placeholder.com/150/56a8c2')
            });
    });
});