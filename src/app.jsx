import React from 'react';
import View  from 'react-flexbox'
import AceEditor from 'react-ace'

require('./themes/nord')
require('brace/mode/javascript')
export default class App extends React.Component {

  state = {
    code: codeblock,
    raw: '',
    modified: '// paste some raw data here',
    mode: 'javascript',
    lineNumbers: false
  }
  onChangeCode(code) {
    this.setState({code})
  }
  onChangeRaw(raw) {
    this.setState({raw})
  }
  render() {

    return (
      <div id="container" className="flexChild columnParent">

        <div id="editor-container" className="flexChild">
          <AceEditor
            mode="javascript"
            theme="nord"
            fontSize={16}
            onChange={code => this.onChangeCode(code)}
            height={'100%'}
            width={'100vw'}
            showGutter={true}
            readOnly={false}
            tabSize={2}
            value={this.state.code}
            name="input-editor"
          />
        </div>

        <div id="preview-row" className="flexChild rowParent">
          <div className="flexChild selected">
            <p>Raw</p>
          </div>

          <div className="flexChild">
            <p>Modified</p>
          </div>
        </div>
      </div>

    );
  }
}
const codeblock = `
/^\S+([a-zA-Z]+?$/gxi

// A Comment!

import React from 'react';
import View  from 'react-flexbox'
import AceEditor from 'react-ace'

require('./themes/lovecraft')
require('brace/mode/javascript')
export default class App extends React.Component {

  state = {
    code:'// write some code here',
    raw: '',
    modified: '// paste some raw data here',
    mode: 'javascript',
    lineNumbers: false
  }
  onChangeCode(code) {
    this.setState({code})
  }
  onChangeRaw(raw) {
    this.setState({raw})
  }
  render() {

    return (
      <div id="container" className="flexChild columnParent">

        <div id="editor-container" className="flexChild">
          <AceEditor
            mode="javascript"
            theme="lovecraft"
            fontSize={8}
            onChange={code => this.onChangeCode(code)}
            height={'100%'}
            width={'100vw'}
            showGutter={true}
            readOnly={false}
            tabSize={2}
            value={this.state.code}
            name="input-editor"
          />
        </div>

        <div id="preview-row" className="flexChild rowParent">
          <div className="flexChild selected">
            <p>Raw</p>
          </div>

          <div className="flexChild">
            <p>Modified</p>
          </div>
        </div>
      </div>

    );
  }
}`
