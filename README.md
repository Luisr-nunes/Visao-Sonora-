<div align="center">

# Visão Sonora

<!-- badges -->
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=flat-square&logo=shadcnui&logoColor=white) ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white)

[Read in English](README.en.md)

*Seu caminho, sua autonomia.*

Protótipo de aplicativo de mobilidade urbana, guiado por voz, para dar segurança e autonomia a pessoas com deficiência visual.

[Vídeo pitch](https://youtu.be/fjgJ1KeDcXo) · [Protótipo no Figma](https://www.figma.com/make/VGmmf9XpKaS5SndVtOWmig/Modelo-do-Vis%C3%A3o-Sonora) · [Site do projeto](https://sites.google.com/cesar.school/projeto-1/home)

</div>

## Sobre

Projeto acadêmico da Cesar School, ligado ao ODS 11 da ONU (Cidades e Comunidades Sustentáveis). Este repositório guarda o front-end do protótipo de alta fidelidade, exportado do Figma Make em React e TypeScript. As telas são simuladas: ainda não há reconhecimento de voz, geolocalização nem rotas reais.

## O problema

No Brasil, mais de 6,5 milhões de pessoas têm deficiência visual. Calçadas irregulares e obras sem sinalização limitam a autonomia, e os mapas tradicionais são visuais, o que os torna pouco úteis para quem não enxerga o caminho.

## A solução

O Visão Sonora não procura o caminho mais curto, e sim o mais seguro e acessível. A interface é controlada por voz e guia o usuário passo a passo, avisando com antecedência sobre obstáculos, interdições e pontos de perigo.

| Funcionalidade | Descrição |
| --- | --- |
| Navegação por voz | Interface inteiramente controlada por comandos de voz ("Onde estou?", "Navegar para...") |
| Rotas seguras | Prioriza calçadas regulares e semáforos sonoros |
| Alertas em tempo real | Usuários relatam obstáculos por voz, com validação colaborativa |
| Modo exploração | Descreve pontos de interesse e comércios acessíveis ao redor |

## Modelos de negócio

| Modelo | Descrição |
| --- | --- |
| B2G | Licenciamento para governos como ferramenta oficial de acessibilidade |
| B2C | Assinatura de baixo custo com acesso a todas as funcionalidades |
| B2B | Estabelecimentos pagam por um selo de acessibilidade que os destaca no mapa |

## Telas do protótipo

| Componente | Conteúdo |
| --- | --- |
| `HomeScreen` | Tela principal com o assistente de voz ("Ouvindo...") e destino |
| `SettingsScreen` | Configurações |
| `MockupScreens` | Apresentação das telas lado a lado |

## Tecnologias

- React 18, TypeScript e Vite 6
- shadcn/ui sobre Radix UI, Lucide
- CSS gerado pelo Tailwind CSS
- Figma e Figma Make (prototipação e exportação), Google Sites (documentação)

## Como executar

Pré-requisito: Node.js 18+.

```bash
git clone https://github.com/Luisr-nunes/Visao-Sonora-.git
cd Visao-Sonora-
npm install
npm run dev      # http://localhost:3000
```

## Equipe

Luis Nunes, Renato Chong, Luis Lucena, Augusto Freitas, Lucas Bonfim, Rafael Dias, Daniel Massud, Raysa Queiroz, João Arruda e Glauberson Ribeiro.
