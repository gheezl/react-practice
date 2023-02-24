const BackgroundImage = ({children}: any) => {
    const BackgroundStyles = {
        width: "100%",
        height: "100%",
        position: "absolute",
        left: "0px",
        top: "0px",
        // zIndex: "-1",
        // filter: "blur(15px)",
        backgroundImage: "url('https://media.istockphoto.com/id/904784522/photo/dramatic-sky.jpg?b=1&s=170667a&w=0&k=20&c=X9_uAgNjcXImrgK6FmRXbWxApajiOv8Xg3l6JzX-ujg=')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover"
        // backgroundSize: "cover",
      } as React.CSSProperties

    return (
        // <img style={BackgroundStyles} src='https://media.istockphoto.com/id/904784522/photo/dramatic-sky.jpg?b=1&s=170667a&w=0&k=20&c=X9_uAgNjcXImrgK6FmRXbWxApajiOv8Xg3l6JzX-ujg='  />
        <div style={BackgroundStyles}>
            {children}
        </div>
    )
}

export default BackgroundImage;