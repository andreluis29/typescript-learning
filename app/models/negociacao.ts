export class Negociacao {

  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) { }

  getData(): Date {
    return this.data;
  }

  getQuantidade(): number {
    return this.quantidade;
  }

  getValor(): number {
    return this.valor;
  }

  getVolume(): number {
    return this.quantidade * this.valor;
  }

  get data(): Date { 
    // Metódo criado de forma defensiva contra o setDate, visando impossibilitar a mudança do atributo original.
    // Mantém o atributo em estado original através de uma nova data gerada para que sirva de modelo para ficar inaterável.
    const data = new Date(this._data.getTime());
    return data;
  }

} 
