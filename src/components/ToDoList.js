export const ToDoList = (props) => {
    let listReturn = props.list.arr.map((item, index) => <li className="items" id={item} onClick={() => {removeItem(index, props.list, props.setList)}}>{item}</li>)
    return listReturn
  }

const removeItem = (index, list, setList) => {
    let newArray = list.arr
    newArray.splice(index, 1)
    return setList({arr: newArray, value: list.value})
}

export default ToDoList