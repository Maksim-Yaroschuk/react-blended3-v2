import { Component } from 'react'
import { getEvents, renderMoreInfo } from '../service/api'
import { Gallery } from './Gallery/Gallery'
import { EventsInfo } from "components/EventsInfo/EventsInfo"

export class App extends Component {
  
  state = {
    events: [],
    eventData: {}
  }

  componentDidMount() {
    this.getData()
  }

  getEvent = (id) => {
    renderMoreInfo(id).then((r) => {
      this.setState( { eventData: r.data})
    })
  }

  getData = () => {
    getEvents().then((r) => {
      this.setState({ events:  [...r]  })
  }) }
  
  render() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Gallery events={this.state.events} getEvent={this.getEvent} />
      <EventsInfo eventsData={this.state.eventData } />
    </div>
  );
  };
  }
