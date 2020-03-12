import App, { Container } from 'next/app';
import Page from '../components/Page';
import 'bootstrap/dist/css/bootstrap.min.css';
class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <div>
        <Page>
         <Component />
        </Page>
      </div>
    );
  }
}

export default MyApp;