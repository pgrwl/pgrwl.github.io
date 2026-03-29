# Manual Installation

1. Download the latest binary for your platform from the [Releases page](https://github.com/pgrwl/pgrwl/releases).
2. Place the binary in your system PATH, for example `/usr/local/bin`.

## Unix Install Script

Requires: `tar`, `curl`, `jq`

```bash
(
set -euo pipefail

OS="$(uname | tr '[:upper:]' '[:lower:]')"
ARCH="$(uname -m | sed -e 's/x86_64/amd64/' -e 's/\(arm\)\(64\)\?.*/\1\2/' -e 's/aarch64$/arm64/')"
TAG="$(curl -s https://api.github.com/repos/pgrwl/pgrwl/releases/latest | jq -r .tag_name)"

curl -L "https://github.com/pgrwl/pgrwl/releases/download/${TAG}/pgrwl_${TAG}_${OS}_${ARCH}.tar.gz" |
tar -xzf - -C /usr/local/bin && \
chmod +x /usr/local/bin/pgrwl
)
```

## Debian Package

```bash
sudo apt update -y && sudo apt install -y curl
curl -LO https://github.com/pgrwl/pgrwl/releases/latest/download/pgrwl_linux_amd64.deb
sudo dpkg -i pgrwl_linux_amd64.deb
```

## Alpine Package

```bash
apk update && apk add --no-cache bash curl
curl -LO https://github.com/pgrwl/pgrwl/releases/latest/download/pgrwl_linux_amd64.apk
apk add pgrwl_linux_amd64.apk --allow-untrusted
```
