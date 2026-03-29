# Helm Chart

See [pgrwl helm-chart](https://github.com/pgrwl/charts)

```bash
helm repo add pgrwl https://pgrwl.github.io/charts
helm repo update pgrwl
helm search repo pgrwl
```

To install the chart with the release name `pgrwl`:

```bash
helm upgrade pgrwl pgrwl/pgrwl \
  --install --debug --atomic --wait --timeout=10m \
  --namespace=pgrwl
```

Docker images are available at [quay.io/pgrwl/pgrwl](https://quay.io/repository/pgrwl/pgrwl).

```bash
docker pull quay.io/pgrwl/pgrwl:latest
```
