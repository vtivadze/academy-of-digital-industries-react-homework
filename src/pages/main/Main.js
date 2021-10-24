export const Main = () => {
  return (
    <div className="conainer">
      <h1 className="mb-3 is-size-1 has-text-centered">React Features</h1>
      
      <h2 className="mt-3 is-inline-block is-size-3 mb-2">Declarative</h2>
      <p className="my-2 is-size-5">React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
      <p className="my-2 is-size-5">Declarative views make your code more predictable and easier to debug.</p>

      <h2 className="mt-3 is-inline-block is-size-3 mb-2">Component-Based</h2>
      <p className="my-2 is-size-5">Build encapsulated components that manage their own state, then compose them to make complex UIs.</p>
      <p className="my-2 is-size-5">Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p>

      <h2 className="mt-3 is-inline-block is-size-3 mb-2">Learn Once, Write Anywhere</h2>
      <p className="my-2 is-size-5">We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.</p>
      <p className="my-2 is-size-5">React can also render on the server using Node and power mobile apps using React Native.</p>
    </div>
  );
};