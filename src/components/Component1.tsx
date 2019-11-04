import React from "react";
import styled from "styled-components";
import {rgba} from "../styles/style-utils";
import {action, observable} from "mobx";
import {inject, observer} from "mobx-react";
// import {cdn} from "../utils/cdn"
import axios from "../drivers/clientAxios"

let Wrapper = styled.div`
  .ss-outer {
    height: 16rem;
    height: calc(100vh - 1.44rem);
    width: 100vw;
    overflow-x: hidden;
    overflow-y: auto;
    font-size: 0.54rem;   
    display: flex;
    
    .ss-tip {
      position: fixed;
      top: 1.44rem;
      left: 0;
      width: 100vw;
      height: 0.9rem;
      line-height: 0.9rem;
      background: ${rgba("#6eb6df", 0.1)};
      text-align: center;
      display: block;
      > .txt {
        color: ${rgba("#fff", 0.5)};
        font-size: 0.36rem;
        padding: 0;
        margin: 0;
      }
    }
     
  }
`;

class Store {
  @observable field1 = 1; // 三种模式
  @action
  setSeekMode(field1) {
    this.field1 = field1;
  }
}

@inject("gStore")
@observer
class Component1 extends React.Component {

  store: Store;

  constructor(props) {
    super(props);
    this.store = new Store();
  }


  componentDidMount() {
    // let that = this;
    console.log("test")!!
    console.log("test")!!
    console.log("test")!!

    axios.post("/api/GET_AIR_STS",{})
      .then(function (res) {
        console.log(res.data)
      })
  }

  windowUnMount() {
    console.log('telecontrol componentWillUnmount');

  }

  componentWillUnmount() {

  }

  getStatus() {
  }

  clickWindow() {

  }

  render() {
    return (
      <Wrapper>
        <div className="ss-outer">
          <div className="ss-tip">
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default Component1;
