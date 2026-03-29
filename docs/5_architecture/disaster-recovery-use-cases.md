# Disaster Recovery Use Cases

_The full process may look like this (a typical, rough, and simplified example):_

- A typical production setup runs **two `pgrwl` StatefulSets** in the cluster:
  one in `receive` mode for **continuous WAL streaming**, and another in `backup` mode for scheduled **base backups**.

- In `receive` mode, `pgrwl` continuously **streams WAL files**, applies optional **compression** and **encryption**,
  uploads them to **remote storage** (such as S3 or SFTP), and enforces **retention policies** - for example, keeping
  WAL files for **four days**.

- In `backup` mode, it performs a **full base backup** of your PostgreSQL cluster on a configured schedule -
  for instance, **once every three days** - using **streaming basebackup**, with optional **compression**
  and **encryption**. The resulting backup is also uploaded to the configured **remote storage**,
  and subject to **retention policies** for cleanup. The built-in cron scheduler enables fully automated backups without
  requiring external orchestration.

- During recovery, the same `receive` StatefulSet can be reconfigured to run in `serve` mode,
  exposing previously archived WALs via HTTP to support **Point-in-Time Recovery (PITR)** through `restore_command`.

- With this setup, you're able to restore your cluster - in the event of a crash -
  to **any second within the past three days**, using the most recent base backup and available WAL segments.
