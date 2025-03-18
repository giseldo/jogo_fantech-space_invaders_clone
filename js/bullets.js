export let bullets; // Variável para os tiros
let lastFired = 0;  // Último tiro disparado

export function createBullets(scene) { // Função para criar os tiros
    bullets = scene.physics.add.group({ defaultKey: 'bullet', maxSize: 10 }); // Cria um grupo de tiros
}

export function shootBullet(x, y, time) { // Função para atirar
    if (time > lastFired) { // Verifica se pode atirar
        let bullet = bullets.get(x, y); // Pega um tiro do grupo
        if (bullet) { // Se houver um tiro disponível
            bullet.setActive(true); // Ativa o tiro
            bullet.setVisible(true); // Torna o tiro visível
            bullet.body.velocity.y = -400; // Define a velocidade do tiro 
            lastFired = time + 300; // Define o tempo do último tiro 
        }
    }
}

export function updateBullets() { // Função para atualizar os tiros
    bullets.children.each(function (bullet) { // Para cada tiro no grupo de tiros 
        if (bullet.active && bullet.y < 0) { // Se o tiro estiver ativo e sair da tela
            bullet.setActive(false); // Desativa o tiro
            bullet.setVisible(false); // Torna o tiro invisível
        }
    });
}
