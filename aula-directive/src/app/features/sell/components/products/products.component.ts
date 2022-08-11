import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  titulo = "Produtos";

  exibeProduto = true;

  produto = {
    descricao: "Playstation 5",
    preco: 4600,
    quantidade: 1,
    imagem: "https://s03.video.glbimg.com/x720/8619970.jpg"
  };

  produtos: Array <Product> = [
    {
      descricao: "Playstation 5",
      preco: 4600,
      quantidade: 1,
      imagem: "https://s03.video.glbimg.com/x720/8619970.jpg",
      disponivel: true,
    },
    {
      descricao: "Playstation 4",
      preco: 2900,
      quantidade: 1,
      imagem: "https://s2.glbimg.com/D8n1cOH9oCm2XHhy81_B_zOgTDo=/0x0:695x442/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/F/t/9e8syyQoyrADp4vVrJyw/2016-11-10-29536240375-1eeb76fd86-z.jpg",
      disponivel: true,
    },
    {
      descricao: "Playstation 5 1TB",
      preco: 4800,
      quantidade: 0,
      imagem: "https://s03.video.glbimg.com/x720/8619970.jpg",
      disponivel: false,
    },
    {
      descricao: "Playstation 4 1TB",
      preco: 2900,
      quantidade: 2,
      imagem: "https://s2.glbimg.com/D8n1cOH9oCm2XHhy81_B_zOgTDo=/0x0:695x442/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/F/t/9e8syyQoyrADp4vVrJyw/2016-11-10-29536240375-1eeb76fd86-z.jpg",
      disponivel: true,
    },
  ]

  constructor() { }

  ngOnInit(): void {
    console.log("teste");
  }

  precoComDesconto (preco: number) {
    return preco * 0.90;
  }

  obterPrecoDesconto() {
    this.produto.preco = this.produto.preco * 0.90;
  }

  comprar() {
    alert("Produto comprado com sucesso!");
  }

  clicouTag() {
    alert("Você clicou em uma tag");
  }

  passouMouse() {
    alert("Você passou o mouse em cima de uma tag");
  }

  pressinouTecla(event: any) {
    console.log(event.target.value);
  }

  exibeProdutoSimNao(){
    this.exibeProduto = !this.exibeProduto 
  }
}
