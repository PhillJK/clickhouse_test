CREATE TABLE tasnet.accounting
(
    ip IPv4,
    session_id String,
    user String,
    hotspot String,
    start_at DateTime,
    end_at DateTime,
    user_ip IPv4,
    input_bytes UInt64,
    output_bytes UInt64,
    input_packets UInt64,
    output_packets UInt64,
    session_time UInt64,
    nas String,
    is_new Bool
)
ENGINE = MergeTree()
ORDER BY (session_id,start_at, user, hotspot)
PRIMARY KEY (session_id, start_at, user, hotspot)