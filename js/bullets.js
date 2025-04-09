export let bullets; // Variável para os tiros
let lastFired = 0;  // Último tiro disparado
// Variável para os tiros inimigos
export let enemyBullets;
let lastEnemyShot = 0;


export function createBullets(scene) { 
    // Função para criar os tiros
    bullets = scene.physics.add.group({ defaultKey: 'bullet', 
        maxSize: 10 }); // Cria um grupo de tiros
    // Cria um grupo de tiros inimigos
    // O grupo é criado com o mesmo sprite, mas pode ser diferente se necessário
    enemyBullets = scene.physics.add.group({ defaultKey: 'bullet', 
        maxSize: 20 });

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

/// Função para criar os tiros inimigos
export function enemyShoot(scene, time, enemies) {
    if (time > lastEnemyShot) {
        const aliveEnemies = enemies.getChildren().filter
        (e => e.active);
        if (aliveEnemies.length > 0) {
            const shooter = Phaser.Utils.Array.GetRandom
            (aliveEnemies);
            const bullet = enemyBullets.get(shooter.x, 
                shooter.y + 20);

            if (bullet) {
                bullet.setActive(true);
                bullet.setVisible(true);
                bullet.body.velocity.y = 200;
                lastEnemyShot = time + 1000;
            }
        }
    }
}

export function updateBullets() {
    if (!bullets || !bullets.children) return; 
    // Garante que bullets e children existem

    bullets.children.each(function (bullet) {
        if (bullet.active && bullet.y < 0) {
            bullet.destroy(); 
            // Ou desativa se preferir reaproveitar
        }
    });
    //Atualização dos tiros inimigos
    enemyBullets.children.each(function (bullet) {
        if (bullet.active && bullet.y > 600) {
            bullet.destroy(); // Saiu da tela
        }
    });
}
