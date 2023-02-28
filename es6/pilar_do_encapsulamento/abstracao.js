class Tv{
    constructor() {
        this._relacaoCanais + Array(2, 3, 5, 7, 10);
        this._canalAtivo = 5;
        this._volume = 5;

    };
    // getters setters
        get canalAtivo() {
            return this._canalAtivo;
        };
        set canalAtivo(canal) {
            // Colocar um controle se o canal está ativo ou não
           if(this._relacaoCanais.indexOf(canal) !== -1) {
            this._canalAtivo = canal;
           }
            console.log(x);
            
        };
};

let tv = new Tv();

this.canalAtivo = 10;

console.log(tv.canalAtivo);