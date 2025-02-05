use `db_king_tours_v1.2025`;

drop table if exists `contact`;
create table if not exists `contact`
(
    id            int primary key auto_increment,
    company_name  varchar(1000),
    logo          varchar(1000),
    title         varchar(1000),
    thumbnail     varchar(1000),
    description   text,
    address       varchar(1000),
    detail        longtext,
    email         varchar(1000),
    phone         varchar(1000),
    hotline       varchar(1000),
    whatsapp      varchar(1000),
    zalo          varchar(1000),
    phone_detail  json,
    whatsapp_link varchar(1000),
    zalo_link     varchar(1000),
    facebook      varchar(1000),
    map_link      text,
    images        json,
    created_at    timestamp,
    updated_at    timestamp
);

drop table if exists `destinations`;
create table if not exists `destinations`
(
    id          int primary key auto_increment,
    name        varchar(1000),
    title       varchar(1000),
    thumbnail   varchar(1000),
    description text,
    detail      longtext,
    slug        varchar(1000),
    priority    int,
    created_at  timestamp,
    updated_at  timestamp
);

drop table if exists `categories`;
create table if not exists `categories`
(
    id          int primary key auto_increment,
    name        varchar(1000),
    title       varchar(1000),
    thumbnail   varchar(1000),
    description text,
    detail      longtext,
    slug        varchar(1000),
    priority    int,
    created_at  timestamp,
    updated_at  timestamp
);

drop table if exists `tours`;
create table if not exists `tours`
(
    id                  int primary key auto_increment,
    title               varchar(1000),
    thumbnail           varchar(1000),
    description         text,
    detail              longtext,
    price_usd           int,
    price_vnd           int,
    destinations        varchar(1000),
    destinations_detail json,
    duration            varchar(1000),
    duration_number     int,
    categories          json,
    itinerary           json,
    highlights          json,
    includes            json,
    excludes            json,
    images              json,
    slug                nvarchar(1000),
    priority            int,
    created_at          timestamp,
    updated_at          timestamp
);
