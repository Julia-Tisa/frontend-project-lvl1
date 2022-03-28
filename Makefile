install: # установка зависимостей
	npm ci
brain-games: # запуск пробной игры
	node bin/brain-games.js
brain-even: # запуск игры
	node bin/brain-even.js
brain-calc: # запуск игры
	node bin/brain-calc.js
brain-gcd: # запуск игры
	node bin/brain-gcd.js
brain-progression: # запуск игры
	node bin/brain-progression.js 
brain-prime: # запуск игры
	node bin/brain-prime.js 
publish: # запуск пробной публикации
	npm publish --dry-run
name: # настройка PS1
	export PS1="🐸 \[\e[1;34m\]\W\[\e[m\]\[\033[32m\]$(__git_ps1)\[\033[00m\] $ "
lint: # запуск линтера
	npx eslint