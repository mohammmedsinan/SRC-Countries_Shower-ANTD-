import React, { Component } from 'react'
import { Pagination } from "antd";
import ReuseAble from './ReuseAble'
const pageSize = 25;

export default class MainComp extends Component {
   /* All the state here */
    state = {
        data: [],
        totalPage: 0,
        current: 1,
        minIndex: 0,
        maxIndex: 0
      };


      componentDidMount() {
        /* fetching data by using fetch with pre-build component from antd */

        fetch("https://restcountries.eu/rest/v2")
          .then((response) => response.json())
          .then((data) =>
            this.setState({
              data,
              totalPage: data.length / pageSize,
              minIndex: 0,
              maxIndex: pageSize
            })
          );
      }
    /* event to make the Pagination navigate able*/
      handleChange = (page) => {
        this.setState({
          current: page,
          minIndex: (page - 1) * pageSize,
          maxIndex: page * pageSize
        });
      };

    render() {
      {/*declared the states to make it easey to work with them */}
        const { data, current, minIndex, maxIndex } = this.state;   
        return (
          
    <div className="App" style={{ marginTop: "20px" }}>
      <h1 style={{textAlign:"center" , fontWeight:"bold" }}>Countries</h1>
      {/* mapping the data from API */}
        {data?.map(
          (data, index) =>
            index >= minIndex &&
            index < maxIndex && (
              //Displaying all data that did receive from API in reUseAble.js
              <ReuseAble 
              name={data.name} 
              flag={data.flag} 
              population={data.population} 
              region={data.region}
              latlng={data.latlng}
              capital={data.capital}
              />
                ))}
                {/* the Pagination section */}
            <div style={{display:"flex" , justifyContent:"center"}}>
            <Pagination
              pageSize={pageSize}
              current={current}
              total={data.length}
              onChange={this.handleChange}
              style={{ bottom: "0px" }}
            />
            </div>
          </div>
        )
    }
}
