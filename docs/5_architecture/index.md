# Architecture

The architecture section explains why `pgrwl` writes to the local filesystem first, how durability is preserved with `fsync`, and why streaming replication is used instead of relying only on `archive_command`.

- [Daemon Modes](daemon-modes.md)
- [Design Notes](design-notes.md)
- [Durability & fsync](durability-and-fsync.md)
- [Disaster Recovery Use Cases](disaster-recovery-use-cases.md)
- [Why Not archive_command?](why-not-archive-command.md)
