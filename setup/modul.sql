
create database student_express;

create table students (
    student_id serial primary key,
    first_name varchar(32) not null,
    last_name varchar(64) not null,
    age int2 not null
);
