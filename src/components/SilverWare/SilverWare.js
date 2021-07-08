function SilverWare (props){
    let name = props.name;
    let count = props.count;
    return (
        <div>
            {name}: {count * 2}
        </div>
    )
}

export default SilverWare