const heading = React.createElement("div",
    {id: "parent"},
    React.createElement("h1",
        { id: "chiild" },
    "I am child"
    )    
)


        const root= ReactDOM.createRoot(document.getElementById("root"))
        root.render(heading)