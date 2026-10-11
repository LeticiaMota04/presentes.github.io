// ---------- Gift data ----------
// "qr" é a chave do presente no qr_code.json (o valor, sem "R$" e sem ponto de milhar).

export const icons = {
  coracao: '<path d="M12 21s-7-4.35-9.5-9A5.5 5.5 0 0112 5.5 5.5 5.5 0 0121.5 12c-2.5 4.65-9.5 9-9.5 9z"/>',
  jantar: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/>',
  cesta: '<path d="M4 9h16l-1.5 10a2 2 0 01-2 1.7H7.5a2 2 0 01-2-1.7L4 9z"/><path d="M8 9V7a4 4 0 018 0v2"/>',
  casaco: '<path d="M8 4l4 2 4-2 3 4-2 2v10H5V10L3 8z"/>',
  controle: '<rect x="3" y="9" width="18" height="9" rx="4"/><path d="M8 12v3M6.5 13.5h3M15.5 12h.01M18 13.5h.01"/>',
  sofa: '<path d="M5 12V8a2 2 0 012-2h10a2 2 0 012 2v4"/><path d="M3 12h18v5a1 1 0 01-1 1h-1v2h-2v-2H7v2H5v-2H4a1 1 0 01-1-1v-5z"/>',
  ferramenta: '<path d="M21 7a4 4 0 01-5.6 3.66L8 18l-2-2 7.34-7.4A4 4 0 1121 7z"/>',
  casa: '<path d="M4 11l8-7 8 7"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/>',
  pc: '<rect x="3" y="5" width="18" height="12" rx="1.5"/><path d="M8 21h8M12 17v4"/>',
  mala: '<rect x="4" y="8" width="16" height="12" rx="1.5"/><path d="M9 8V6a2 2 0 012-2h2a2 2 0 012 2v2M4 13h16"/>',
  interrogacao: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 015 0c0 2-2.5 2-2.5 4"/><path d="M12 17h.01"/>',
  caixa: '<path d="M3 8l9-4 9 4-9 4-9-4z"/><path d="M3 8v9l9 4 9-4V8"/><path d="M12 12v9"/>',
  bebe: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-4 3-6 7-6s7 2 7 6"/>',
  alerta: '<path d="M12 3l9 16H3z"/><path d="M12 9v5M12 17h.01"/>',
  chip: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>'
};

export const gifts = [
  { qr: "livre", name: "O que o seu coração mandar", desc: "E o orçamento permitir!", price: "Livre", icon: "coracao" },
  { qr: "50", name: "Um jantar para os recém-casados", desc: "Porque se depender da noiva, só rola miojo.", price: "R$ 50,00", icon: "jantar" },
  { qr: "100", name: "Primeiro mercado", desc: "Para o Vini não viver de fotossíntese.", price: "R$ 100,00", icon: "cesta" },
  { qr: "150", name: "Um casaquinho para enfrentar o frio", desc: "No Ceará bateu 23º a gente já bota o casaco", price: "R$ 150,00", icon: "casaco" },
  { qr: "200", name: "Um jogo para os noivos jogarem juntos", desc: "Para fortalecer o relacionamento... ou começar uma discussão.", price: "R$ 200,00", icon: "controle" },
  { qr: "250", name: "Terapia da noiva", desc: "Uma pequena contribuição para ajudar a tentar manter a sanidade.", price: "R$ 250,00", icon: "sofa" },
  { qr: "300", name: "Alugar o noivo por um dia", desc: "Inclui suporte técnico, montagem de computador e partidas de videogame. Sujeito à aprovação da esposa.", price: "R$ 300,00", icon: "ferramenta" },
  { qr: "400", name: "Ajuda para montar nosso novo lar", desc: "Porque vamos ter duas malas e um sonho.", price: "R$ 400,00", icon: "casa" },
  { qr: "500", name: "Um upgrade no setup dos recém-casados", desc: "Para garantir que o amor continue rodando a 144 FPS.", price: "R$ 500,00", icon: "pc" },
  { qr: "750", name: "Mala extra pra levar cuscuz e tapioca", desc: "Porque podemos sair do Ceará, mas não precisamos abandonar nossa culinária nordestina.", price: "R$ 750,00", icon: "mala" },
  { qr: "1000", name: "Ajuda para descobrir por que tudo é tão caro", desc: "Uma contribuição para o choque de realidade financeiro.", price: "R$ 1.000,00", icon: "interrogacao" },
  { qr: "1500", name: "Não temos ideia do que você quer comprar com isso, mas obrigado", desc: "Sua generosidade ultrapassou nossa capacidade de criar uma justificativa plausível.", price: "R$ 1.500,00", icon: "caixa" },
  { qr: "2000", name: "Perguntar quando vêm os filhos", desc: "A taxa oficial para fazer essa pergunta inconveniente.", price: "R$ 2.000,00", icon: "bebe" },
  { qr: "4000", name: "Pedir outra pessoa em casamento durante o nosso", desc: "Inclui climão, constrangimento e possível expulsão da festa.", price: "R$ 4.000,00", icon: "alerta" },
  { qr: "33599,99", name: "RTX 5090", desc: "Finalmente, um investimento realmente essencial para a vida de casados.", price: "R$ 33.599,99", icon: "chip" }
];
