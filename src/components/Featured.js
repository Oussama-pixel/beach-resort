import React, { Component } from 'react'
import {RoomContext} from '../Context';
import Room from './Room';
import Title from './Title';
import Loading from './Loading';
export default class Featured extends Component {
    static contextType = RoomContext;
    render() {
        let {loading, featuredRooms:rooms} = this.context;
        rooms = rooms.map(room=><Room key = {room.id} room = {room}/>
        );
        console.log(rooms);
        return (
            <section className="featured-rooms">
                <Title title="featured rooms"/>
                <div className="featured-rooms-center">
                    {loading?<Loading/>:rooms}
                </div>
            </section>
        );
    }
}