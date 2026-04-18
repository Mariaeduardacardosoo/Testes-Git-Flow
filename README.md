# Comandos principais de Git e GitFlow

# Git

# Clonar repositório
git clone <url>
Clona um repositório remoto para o seu computador.

# Ver status
git status
Mostra o estado atual dos arquivos (modificados, adicionados, etc).

# Adicionar arquivos
git add .
git add nome_do_arquivo
Adiciona arquivos para a área de preparação (staging area).

# Criar commit
git commit -m "mensagem"
Salva as alterações com uma mensagem descritiva.

# Enviar para o repositório
git push origin main
Envia os commits para o GitHub.

# Atualizar repositório
git pull origin main
Baixa atualizações do repositório remoto.

# Criar branch
git branch nome-da-branch
Cria uma nova branch.

# Trocar de branch
git checkout nome-da-branch
Muda para outra branch existente.

# Criar e trocar de branch
git checkout -b nome-da-branch
Cria uma nova branch e já troca para ela.

# Corrigir último commit
git commit --amend -m "nova mensagem"
Altera a mensagem do último commit.

# Desfazer alterações
git restore nome_do_arquivo
Remove alterações feitas em um arquivo.

# Remover arquivo do repositório
git rm nome_do_arquivo
Remove um arquivo e registra a remoção no Git.

# GitFlow

# Inicializar GitFlow
git flow init
Inicializa o GitFlow no repositório.

# Criar uma feature
git flow feature start nome-feature
Cria uma nova funcionalidade.

# Finalizar uma feature
git flow feature finish nome-feature
Finaliza a funcionalidade.

# Criar uma release
git flow release start nome-release
Prepara uma nova versão do sistema.

# Finalizar uma release
git flow release finish nome-release
Publica a versão do sistema.

# Criar hotfix
git flow hotfix start nome-hotfix
Cria uma correção urgente em produção.

# Finalizar hotfix
git flow hotfix finish nome-hotfix
Aplica a correção no sistema.
