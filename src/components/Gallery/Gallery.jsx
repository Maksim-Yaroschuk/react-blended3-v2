import { Component } from "react";


export class Gallery extends Component {
    render() {
const {events, getEvent} = this.props
        return (
            <ul>
                {events.map(({ id, name }) => {
                    return <li key={id} onClick={() => getEvent(id)}><p>{name}</p>
                    </li>
                }  )}
          </ul>  
        )
    }
}