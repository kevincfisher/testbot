import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
          <section class="hero is-primary">
              <div class="hero-body">
                  <div class="container">
                      <div class="title">
                          Decide for Me
                      </div>
                      <div class="subtitle">
                          A slash command for slack to make those tough decisions for you.
                      </div>
                  </div>
              </div>
          </section>
          <section class="section">
          <div class="title">Usage</div>
          <div class="content">
              <code>/decideforme "item1" "item2" "item3" ... "itemN"</code>
          </div>
          </section>
      </div>
    );
  }
}

export default App;
