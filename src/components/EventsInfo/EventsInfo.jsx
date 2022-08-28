import { Component } from 'react';

export class EventsInfo extends Component {
  render() {
    const { eventsData } = this.props;
    return (
      <div>
        <h2>{eventsData.name}</h2>
        <p>{eventsData.info}</p>
      </div>
    );
  }
}
