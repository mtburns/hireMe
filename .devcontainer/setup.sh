#!/usr/bin/env bash
set -euo pipefail

# The image includes nvm; use the Wix-supported Node version consistently.
source "${NVM_DIR}/nvm.sh"
nvm install 24.22.1
nvm alias default 24.22.1
nvm use 24.22.1

npm ci --include=optional
npm ci --prefix wix-deploy --include=optional
printf '\nReady. Run npm run wix:prepare, then follow wix-deploy/README.md.\n'
