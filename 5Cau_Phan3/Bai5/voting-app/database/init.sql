CREATE TABLE votes (
    id SERIAL PRIMARY KEY,
    candidate VARCHAR(255) NOT NULL,
    voter_id VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_candidate ON votes (candidate);