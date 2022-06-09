import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {

  private elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  template(model: Negociacoes): string {
    return `
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>Data</th>
          <th>Quantidade</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        ${model.lista().map((negociacao, index) => {
          let min = 0, max = 6;
          min = Math.ceil(min);
          max = Math.floor(max);
          index = Math.floor(Math.random() * (max - min + 1)) + min;
      return `
            <tr style="background: #${index}${index}${index}${index}${index}${index}; color: white;">
              <td>${new Intl.DateTimeFormat().format(negociacao.getData())}</td>
              <td>${negociacao.getQuantidade()}</td>
              <td>${negociacao.getValor()}</td>
            </tr>
          `;
    }).join('')}
        
      </tbody>
    </table>
    `;
  }

  update(model: Negociacoes): void {
    this.elemento.innerHTML = this.template(model);
  }
}