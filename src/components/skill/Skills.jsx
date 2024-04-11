export function Skills(props){
    return(
            
            <span className="mt-2 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 mr-2 transition-transform duration-300 transform hover:-translate-y-2 cursor-pointer">
                {props.name}
            </span>
    )
}