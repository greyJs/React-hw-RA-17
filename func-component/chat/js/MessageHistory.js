'use strict';
const MessageHistory = ({list})=>{
  if(list.length === 0){
    return null;
  };
  const listMessage = list.map(el=> {
    return (
      (el.type === "message" && (<Message key = {el.id} from = {el.from} message = {el}/>)) ||
      (el.type === "response" && (<Response key = {el.id} from = {el.from} message = {el}/>)) ||
      (el.type === "typing" && (<Typing key = {el.id} from = {el.from} message = {el}/>
      ))
    );
  });
return  (<ul> {listMessage} </ul>)
}
MessageHistory.defaultProps = {
  list: []
};
