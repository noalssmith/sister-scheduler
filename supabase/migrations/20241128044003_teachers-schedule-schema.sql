drop table if exists teachers_schedule;

drop type if exists day_of_week;
create type day_of_week as enum(
        'Sunday', 
        'Monday', 
        'Tuesday', 
        'Wednesday', 
        'Thursday', 
        'Friday', 
        'Saturday'
    );

create table
    teachers_schedule (
        id bigint primary key generated always as identity not null,
        created_at timestamptz default now() not null,
        day day_of_week not null,
        start_time time not null,
        end_time time not null,
        teacher_id bigint not null,
        foreign key (teacher_id) references teachers(id) on delete cascade
    );