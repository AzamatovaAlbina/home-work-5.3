import "./СardLayout.css"
function СardLayout (props){
    const classes = props.className + " wrapper"
    return(
        <div className={classes}>{props.children}</div>
    )
}
export default СardLayout;