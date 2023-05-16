import React, { Component } from 'react';
import SignaturePad from 'react-signature-canvas';

import styles from '../../styles/Home.module.css';

export default class Signature extends Component {
  state = { trimmedDataURL: null };

  sigPad = {};
  clear = () => {
    this.sigPad.clear();
  };
  trim = () => {
    this.setState({
      trimmedDataURL: this.sigPad.getTrimmedCanvas().toDataURL('image/png'),
    });
  };
  render() {
    let { trimmedDataURL } = this.state;

    // console.log("🚀 ~ file: signature.js ~ line 18 ~ signature ~ render ~ trimmedDataURL", trimmedDataURL)
    return (
      <div className={styles.container}>
        <div className={styles.sigContainer}>
          <SignaturePad
            canvasProps={{ className: styles.sigPad }}
            penColor="black"
            backgroundColor="white"
            ref={(ref) => {
              this.sigPad = ref;
            }}
          />
        </div>
        <div>
          <button className={styles.buttons} onClick={this.clear}>
            Clear
          </button>
          <button className={styles.buttons} onClick={this.trim}>
            Add Signature
          </button>
        </div>
        {trimmedDataURL ? (
          <img
            className={styles.sigImage}
            src={trimmedDataURL}
            alt="Signature"
          />
        ) : null}
      </div>
    );
  }
}
