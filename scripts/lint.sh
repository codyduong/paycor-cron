yarn eslint --config .eslintrc $(git diff --name-only $(git merge-base origin/master HEAD) --diff-filter=ACMRTUXB \
| grep -E "\.(js|jsx|ts|tsx)$" | tr '\n' ' ' | xargs)
