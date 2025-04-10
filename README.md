# 🚀 SPACE INVADER - CLONE [Multiplayer]

Este projeto é um **clone do clássico Space Invaders**, desenvolvido em **Phaser.js** no frontend e **Python** para o backend multiplayer.  

O jogo está sendo desenvolvido pela **turma do curso Técnico em Informática da FANTECH**, na **disciplina de Fullstack**.

---

## 📌 Sobre o Projeto
O objetivo do jogo é **eliminar todos os inimigos** enquanto desvia dos ataques.  
A proposta é criar um **modo multiplayer**, permitindo que jogadores joguem juntos online.  

Atualmente, o projeto está na **Fase 1 - Protótipo Singleplayer**, contendo:
✅ Movimentação da nave.  
✅ Disparo de projéteis.  
✅ Inimigos com movimentação em grupo.  
✅ Colisões entre tiros e inimigos.  
✅ Tiros inimigos aleatórios.  
✅ Sistema básico de Game Over (com pausa da cena).  
🔲 Sistema de vidas e pontuação (em desenvolvimento).  

---

## 🎮 Gameplay (Fase 1 - Singleplayer)
- **Mover para a esquerda**: `← (Seta Esquerda)`
- **Mover para a direita**: `→ (Seta Direita)`
- **Atirar**: `Espaço`

---

## 🛠 Tecnologias Utilizadas
- **Phaser.js** → Motor de jogos 2D para o frontend.
- **JavaScript (ES6+)** → Lógica do jogo.
- **HTML5/CSS3** → Estrutura e estilo.
- **Python (em breve)** → Backend para o modo multiplayer.

---

## 📂 Estrutura do Projeto
```
space_invaders-clone/
│── index.html         # Página principal do jogo
│── style.css          # Estilos do jogo e centralização
│── js/
│   ├── game.js        # Configuração do jogo Phaser
│   ├── player.js      # Lógica do jogador (movimentação e tiros)
│   ├── enemies.js     # Lógica dos inimigos (movimentação em grupo)
│   ├── bullets.js     # Gerenciamento de tiros (jogador e inimigos)
│── assets/            # Pasta de imagens e sons
│── README.md          # Documentação do projeto
```

---

## ⚙️ Como Executar o Jogo
### 1️⃣ Clone o repositório  
```sh
git clone https://github.com/K-Galvao-Filho/space_invaders-clone.git
cd space_invaders-clone
```

### 2️⃣ Abra o projeto com um servidor local  
Se estiver usando **VS Code**, instale a extensão **Live Server** e clique com o botão direito no `index.html`, selecionando **"Open with Live Server"**.

Ou rode com **Python**:  
```sh
python -m http.server 8000
```
Depois, abra o navegador e acesse `http://localhost:8000`.

---

## 🚀 Próximos Passos
🔲 Sistema de vidas e exibição de HUD.  
🔲 Sistema de pontuação e fases.  
🔲 Reinício automático ou botão após Game Over.  
🔲 Versão **multiplayer** com WebSockets e backend em Python.  

---

## 📜 Licença
Este projeto está sob a licença **MIT**. Você pode modificá-lo e usá-lo livremente.

---

## 🤝 Contribuição
Este projeto está sendo desenvolvido pelos **alunos da disciplina Fullstack do curso Técnico em Informática da FANTECH**.  

Caso queira contribuir, sinta-se à vontade para abrir um **Pull Request** ou sugerir melhorias!  

🔗 **Repositório Oficial**: [SPACE INVADER - CLONE [Multiplayer]](https://github.com/K-Galvao-Filho/space_invaders-clone)

---

# Space Invaders Clone - Multiplayer

Um clone do clássico jogo Space Invaders desenvolvido com Phaser 3.

## Sobre o Jogo

Este projeto é um clone simples do Space Invaders com a possibilidade de expansão para multiplayer. O jogo foi desenvolvido utilizando a biblioteca Phaser 3 para jogos HTML5.

## Como Jogar

- Use as setas **← →** para mover a nave
- Pressione **espaço** para atirar
- Destrua todos os aliens antes que eles cheguem ao fundo da tela

## Tecnologias Utilizadas

- HTML5
- JavaScript
- [Phaser 3](https://phaser.io/)

## Como Executar Localmente

1. Clone este repositório
2. Abra o arquivo `index.html` em um servidor web local
   - Você pode usar o Live Server do VS Code ou qualquer outro servidor HTTP simples

## GitHub Pages

Este jogo está disponível online através do GitHub Pages: [Jogar Space Invaders](https://seuusername.github.io/jogo_fantech-space_invaders_clone/)

## Próximas Melhorias

- Implementar modo multiplayer
- Adicionar efeitos sonoros
- Adicionar diferentes tipos de aliens
- Implementar sistema de vidas
- Adicionar power-ups
```
