# Next JS - Material UI Boilerplate 

Based on Material UI [Example](https://github.com/mui/material-ui/tree/master/examples/material-next).
## Componentes Básicos

* NextJS 
* Material UI (v5) && Emotion (CSS Engine)
* Axios
* PropTypes

## Folder Structure

```text

root
├── pages                           * Routed components that represents pages. Main files of the app (_app.js, _document.js)
├── public                          * Folder for public elements of the application
├── src                             * Main source folder
│   └── api                         * Contains code that will help with RESTFUL API calls
│       └── base.js                 * Base class that will make HTTP Calls using Axios
│       └── lead.js                 * Sample class that will use base.js to make http calls.
│       └── index.js                * Export index pattern.
│   └── components                  * Components of the project that are not pages. Relate to domain concepts 
│   └── hooks                       * For custom created hooks 
│   └── models                      * Classes that will represent model entities.
│       └── lead.js                 * Sample entity class. 
│       └── index.js                * Export index pattern.
│   └── shared                      * Contains shared components for the application (no related with domain concepts)
│       └── AppBar                  * Sample component that contains a custom app bar using MUI App Bar.
│           └── AppBar.jsx          * JSX Component File
│           └── styles.js           * Custom styles used in the component
│           └── index.js            * Export index pattern.
│       └── createEmotionCache.js   * Handles de cache for Emotion engine.
│       └── theme.js                * Theme configuration.

```

**Some important root files**

```text
.
├── .gitignore              * Coding styles (also by programming language).
├── .env.local              * Environment variables (env.production, env.local, env.uat, etc).
├── next.config.js          * ESLint configuration and rules.

```

## How to use

Clone using git.

Install it and run:

```sh
npm install
npm run dev
```

## Conventions, Patterns and Principles

- [Presentational Components and Separation of Concerns in React](https://www.freecodecamp.org/news/separation-of-concerns-react-container-and-presentational-components/#:~:text=all%20the%20users.-,Presentational%20components,the%20data%20that%20they%20receive)
- [Next Documentation](https://nextjs.org/docs)
- [Essential Javascript for React](https://nextjs.org/learn/foundations/from-javascript-to-react/essential-javascript-react)
- [Learn React](https://react.dev/learn)

### Helpful concepts

- **Component names** should always be **multi-word**, except for root “App” components. Use “UserCard” or “ProfileCard” instead of “Card” for example.
  Each component should be in its own file.
- **Components files** should be always **PascalCase** except for HOC's. Use “UserCard.jsx". Use the JSX extension, except for pages.
- **Components are named accordingly to it's relative path to components or src**. Given that, a component located at src/components/User/List.jsx would be named as UserList. A component located at src/screens/User/List would be named as ScreensUserList.
- **Components that are in a folder with same name, don’t repeat the name in the component**. Considering that, a component located at src/components/User/List/List.jsx would be named as UserList and NOT as UserListList.
- Components that are only **used once per page should begin with the prefix “The”**, to denote that there can be only one. For example for a navbar or a footer you should use “TheNavbar.jsx or “TheFooter.jsx.
- **High Order Components** (HOC) file and folder name in **lowerCamelCase**.
- **Always use full name** instead of abbreviation in the name of your components. For example don’t use “UDSettings”, use instead “UserDashboardSettings”.
- **Each page is a react class component** having some state. A **page component** uses other components to assemble the page like lego blocks.
- **Keep components shallow**. If a components has a lot of nested markup then the chances of reusing it decreases. Instead we should take advantage of composition. It saves us from prop drilling or having to reach out to context api.
- **Presentational components** are those who **don’t have internal state**. Their role is to show certain pieces of UI/Layout. They are provided data via props or context api.
- **Container components** are those which **deals with business logic**. They usually have some state and only render presentational components based on the logic.
- This way Presentational and Container components complete the puzzle together. By **dividing the responsibilities**, code becomes easier to maintain and debug.

### Organization / Best practices

- Use a **central export file** (Barrel export -> index.js) in the components directory. With this file we can just import all of our components into it and export them. This will allow us to import components into any file from the same place.
- **Presentational** and **Container components** are kept at **src/components**.
- **Group components** by module/feature.
- Keep **generic components** inside src/components/UI or src/components/layout.
- **Keep pages simple**, with minimum structure and code.
- Group pages accordingly to route definition. For a route /user/list we would have a page located at /src/pages/User/List.jsx.

## Additional tools:

* Emotion Styled components: https://emotion.sh/docs/styled

