drop table if exists teachers;

create table
    teachers (
        id bigint primary key generated always as identity not null,
        created_at timestamptz default now() not null,
        name text not null
    );