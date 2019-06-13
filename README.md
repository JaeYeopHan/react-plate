# react-plate

Do we still need a redux?

I think, we can manage state of application with [Hooks API](https://reactjs.org/docs/hooks-intro.html) and [Context API](https://reactjs.org/docs/context.html) of React.

## 🔫 Killing Point

```ts
const GlobalContext = createContext(defaultValue)

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, globalState)
  const value = useMemo(() => [state, dispatch], [state])

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}
```

> 💡 If you don't like TypeScript, you can see the [VanillaJS version](https://github.com/JaeYeopHan/react-plate/tree/javascript-version)

## ⛑ Structure

```
src
├── api
├── components
├── containers
├── modules
├── routes
├── utils
├── App.tsx
└── index.tsx
```

## 📦 Packages

### Main

- [create-react-app](https://github.com/facebook/create-react-app)
- [react 16.8.x](https://github.com/facebook/react)
- [react-router 5.x](https://github.com/ReactTraining/react-router)
- [TypeScript 3.5.x](https://github.com/microsoft/TypeScript)

### etc

- [loadable-components](https://github.com/smooth-code/loadable-components)

### Development Setting

- [eslint](https://github.com/eslint/eslint)
- [prettier](https://github.com/prettier/prettier)
- [husky](https://github.com/typicode/husky)
- [lint-staged](https://github.com/okonet/lint-staged)
- [browserslist](https://github.com/browserslist/browserslist)

> [More Details](./pacakge.json)

## ✅ TODO

- [ ] [react-helmet](https://github.com/nfl/react-helmet)
- [ ] [react-i18next](https://github.com/i18next/react-i18next)
- [ ] [react-testing-library](https://github.com/testing-library/react-testing-library)
- [ ] [react-snap](https://github.com/stereobooster/react-snap)

<div align="center">

<sub><sup>Project by <a href="https://github.com/JaeYeopHan">@Jbee</a></sup></sub><small>✌</small>

</div>
