// const heading = React.createElement(
//     "h1", 
//     {id:"heading"},
//      "hello from react"
// );
const parent = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{}, "hi i am h1 tag") ,React.createElement("h1",{}, "hi i am h2 tag")]
    ), React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{}, "hi i am h1 tag") ,React.createElement("h1",{}, "hi i am h2 tag")]
    )]
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("id"));
root.render(parent);