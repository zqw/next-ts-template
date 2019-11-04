import * as React from "react";
import Head from "next/head";
import {Provider, useStaticRendering} from "mobx-react";
import gStore from "../store/gStore";
import GlobalStyle from "../styles/global-styles"

// @ts-ignore
if (!global.window) {
  // is server
  useStaticRendering(true);
}

export default class Layout extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    let that = this;
    return (
      <div>
        <Head>
          <title>{"default title"}</title>
        </Head>
        <main>
          <Provider gStore={gStore}>
            <GlobalStyle/>
            <div>{that.props.children}</div>
          </Provider>
        </main>
      </div>
    );
  }
}
