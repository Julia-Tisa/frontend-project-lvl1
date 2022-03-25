install:
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
name:
	export PS1="🐸 \[\e[1;34m\]\W\[\e[m\]\[\033[32m\]$(__git_ps1)\[\033[00m\] $ "