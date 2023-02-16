import Slider from "./Slider"

function Quiz(props) {
    const divStyles = {
        height: "200px",
        width: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center"
    }

    return <div style={divStyles}>
        <h1>{props.title}</h1>
        <span>How much you love front end</span>
        <Slider />
        <br />
        <span>what is your favorite frontend topic?</span>
        <input></input>

    </div>
}

export default Quiz