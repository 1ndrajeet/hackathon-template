from datetime import UTC, datetime


def get_utc_now_iso() -> str:
    """Return the current UTC timestamp formatted as ISO 8601 string."""
    return datetime.now(UTC).isoformat()
