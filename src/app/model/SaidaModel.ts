export interface Saida {
  id: number;
  carro: {
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
    };
  };
  horaEntrada: string;
  horaSaida: string;
  dataEntrada: string;
  dataSaida: string;
  preco: number;
}
