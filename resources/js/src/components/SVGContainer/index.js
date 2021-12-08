const SVGContainer = ({source, ...props}) => {
    return (
        <i >
            <img src={source} {...props} />
        </i>
    )
}

export default SVGContainer
