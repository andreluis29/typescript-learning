export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    getData() {
        return this.data;
    }
    getQuantidade() {
        return this.quantidade;
    }
    getValor() {
        return this.valor;
    }
    getVolume() {
        return this.quantidade * this.valor;
    }
    get data() {
        // Metódo criado de forma defensiva contra o setDate, visando impossibilitar a mudança do atributo original.
        // Mantém o atributo em estado original através de uma nova data gerada para que sirva de modelo para ficar inaterável.
        const data = new Date(this._data.getTime());
        return data;
    }
}
