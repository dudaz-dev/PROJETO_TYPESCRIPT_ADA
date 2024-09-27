export abstract class ItemAcervo {
    private static ultimoId: number = 0;
    public readonly id: number;

    constructor(
        public titulo: string,
        public ano: number,
        public disponivel: boolean = true
    ) {
        this.id = ++ItemAcervo.ultimoId;
    }

    abstract descricao(): string;
}
