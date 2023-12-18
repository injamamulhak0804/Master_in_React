const heading = React.createElement("div", {}, React.createElement("div", {},
    [React.createElement("h1", {}, "Hello World!"),
    React.createElement("h2", {}, "Hello World!")])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

