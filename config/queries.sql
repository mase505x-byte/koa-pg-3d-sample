CREATE DATABASE koa3d;

\c koa3d;

CREATE TABLE scene_objects (
    id SERIAL PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    type VARCHAR(50) NOT NULL,

    pos_x FLOAT NOT NULL DEFAULT 0,
    pos_y FLOAT NOT NULL DEFAULT 0,
    pos_z FLOAT NOT NULL DEFAULT 0,

    rot_x FLOAT NOT NULL DEFAULT 0,
    rot_y FLOAT NOT NULL DEFAULT 0,
    rot_z FLOAT NOT NULL DEFAULT 0,

    scale_x FLOAT NOT NULL DEFAULT 1,
    scale_y FLOAT NOT NULL DEFAULT 1,
    scale_z FLOAT NOT NULL DEFAULT 1,

    texture VARCHAR(255),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO scene_objects (
    name,
    type,
    pos_x,
    pos_y,
    pos_z,
    texture
)
VALUES
(
    'Demo Cube',
    'cube',
    0,
    0,
    0,
    '/assets/images/bg.png'
);
