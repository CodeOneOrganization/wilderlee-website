import { ICard } from "./PlansTypes";

const plans = [{
  title: "Trimestral",
  price: {
    current: "249.99",
    old: 159.99,
    installment: {
      amount: 3,
      value: 199.99
    }
  },
  benefits: [
    { content: "90 dias dias de acompanhamento no Whatsapp" },
    { content: "Plano alimentar atualizado a cada 45 dias" },
    { content: "Protocolo de treinamento atualizado a cada 30 dias" },
    { content: "Correção de exercícios por vídeos" },
    { content: "Feedbacks quinzenal com ajustes nos no treino e dieta" },
  ],
  target: "Para novos alunos",
  time: {
    measure: "mêses",
    value: 3
  }

},
{
  title: "Semestral",
  price: {
    current: 499.99,
    old: 549.99,
    installment: {
      amount: 7,
      value: 99.99
    }
  },
  benefits: [
    { content: "180 dias de acompanhamento no Whatsapp" },
    { content: "Plano alimentar atualizado a cada 60 dias" },
    { content: "Protocolo de treinamento atualizado a cada 30 dias" },
    { content: "Correção de exercícios por vídeos" },
    { content: "Feedbacks quinzenal com ajustes nos no treino e dieta" },
  ],
  target: "Para novos alunos",
  time: {
    measure: "mêses",
    value: 6
  }

},
{
  title: "Anual",
  price: {
    current: 999.99,
    old: 1249.99,
    installment: {
      amount: 12,
      value: 99.99
    }
  },
  benefits: [
    { content: "365 dias(1 ano) de acompanhamento no Whatsapp" },
    { content: "Plano alimentar atualizado a cada 45 dias" },
    { content: "Protocolo de treinamento atualizado a cada 30 dias" },
    { content: "Correção de exercícios por vídeos" },
    { content: "Feedbacks quinzenal com ajustes nos no treino e dieta" },
  ],
  target: "Para alunos",
  time: {
    measure: "ano",
    value: 1
  }

}
] as ICard[]

export default plans