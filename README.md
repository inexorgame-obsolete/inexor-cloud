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

- **Users, Auth, Permissions, Content/Models**(With relations n:n, 1:1, 1:n): https://strapi.io/ (Koa, Bookshelf/Mongoose, nodemail) 
- **Database:** MongoDB, Postgres or MySQL (strapi supports all three)

## Objects

Objects always have `id`, `created_at` and `updated_at` fields.

We already thought about this here: https://github.com/inexorgame/inexor-core/wiki/Main-Menu-UI#content-components

This is a preview of a potential data schema.

``` 
{
    user: {
        username: string,
        password: string,
        contents: [content] | null,
        clans: [clan] | null,
        mainClan: clan | null,
        avatar: binary,
        model: string,
        friends: [user] | null
    },
    content: {
        author: user,
        title: string,
        description: string,
        package: binary,
        license: license,
        rating: number,
        gamemodes: [gamemode]
        comments: [comment] | null,
        type: ['texture', 'sound', 'map', 'prefab', 'entity'],
        dependencies: [content] | null,
        dependents: [content] | null,
    },
    gamemode: {
        name,
        description,
        maps: [content],
    },
    server: {
        name: string,
        creator: user,
        players: [user] | null,
        maxPlayers: number,
        gamemode: gamemode,
        map: content,
        mapCycle: [content] | null,
    },
    comment: {
        author: user,
        text: string,
        rating: number,
        parent: comment,
        childs: comment
    },
    license: {
        name: string,
        description: string,
        contents: [content] | null,
    }
    clan: {
        name: string,
        description: string,
        tag: string,
        founder: user,
        members: [user],
    },
}
```

## Design questions / decisions

There are some design questions we need to decide. These should be decided as early as possible.
Here is a list of the ones we have so far (feel free to suggest more ;-) ):

 * Do we allow a name change?
   * If yes: How do we implement it? Possibilities:
     * Names need to be unique, but can be changed.
     * Names may be duplicate. Only unique attribute must be the email (would require an email field).
     * The Steam-solution: One unique, permanent login-name and a display name (would require another field). This solution might be the one which would be the easiest to integrate.
 * Rename clan(s) to team(s)?
 * Do we require an email-address?
