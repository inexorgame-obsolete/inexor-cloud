# Inexor Cloud
Centralized platform for immersive community features.

## Features
Most of the required features are documented here: https://github.com/inexorgame/inexor-core/wiki/Game-Community
Below you see an overview of milestone features.

- Centralized User-management and authentication (non-invasive)
- Hosted game content (core content, user content)
- Steam-workshop like content management

The cloud is accessible via ingame UI or online website

**Disclaimer:** This is not meant to be mandatory for users. They can still play and join servers _without_ an account on the inexor-cloud. The account is what enables you to easily share knowledge, content and improve on a larger scale. The entrance barrier to share and improve each others is lowered.

## Proposed Stack

Users, Auth, Permissions, Content/Models(With relations n:n, 1:1, 1:n): https://strapi.io/ (Koa, Bookshelf/Mongoose, nodemail) 
Database: MongoDB, Postgres or MySQL (strapi supports all three)

## Objects

Objects always have `id`, `created_at` and `updated_at` fields.

We already thought about this here: https://github.com/inexorgame/inexor-core/wiki/Main-Menu-UI#content-components

This is a preview of a potential data schema.

``` js
{
    user: {
        username,
        password,
        contents,
        clans: [clan],
        mainClan: clan,
        avatar,
        model,
        friends: [user]
    },
    content: {
        author: user,
        title,
        description,
        package,
        license: license,
        rating,
        gamemodes: [gamemode]
        comments: [comment],
        type: ['texture', 'sound', 'map', 'prefab', 'entity'],
        dependencies: [content],
        dependents: [content],
    },
    gamemode: {
        name,
        description,
        maps: [content],
    },
    server: {
        name,
        creator: user,
        players: [user],
        maxPlayers,
        gamemode: gamemode,
        map: content,
        mapCycle: [content],
    },
    comment: {
        author: user,
        text,
        rating,
    },
    license: {
        name,
        description,
        contents: [content],
    }
    clan: {
        name,
        description,
        tag,
        founder: user,
        members: [user],
    },
}
```