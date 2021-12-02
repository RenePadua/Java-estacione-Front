export interface Veiculo {
    id: number;
    marca: string;
    modelo: string;
    cor: string;
    placa: string;
    cliente: {
      id: number;
      nome: string;
      cpf: string;
      telefone: string;
    }
}