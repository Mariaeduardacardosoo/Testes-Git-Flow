# Comandos principais de Git e GitFlow

## Clonar repositório
git clone <url>

## Ver status
git status

## Adicionar arquivos
git add .
git add nome_do_arquivo

## Criar commit
git commit -m "mensagem"

## Enviar para o repositório
git push origin main

## Criar branch
git branch nome-da-branch

## Trocar de branch
git checkout nome-da-branch

## Criar e trocar de branch
git checkout -b nome-da-branch

## Atualizar repositório
git pull origin main

## Corrigir commit (mensagem)
git commit --amend -m "nova mensagem"

## Desfazer alterações
git restore nome_do_arquivo

## GitFlow (básico)
git flow init
git flow feature start nome-feature
git flow feature finish nome-feature