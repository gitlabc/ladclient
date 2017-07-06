import styles from './App.css';
import React from 'react';

import LadHeader from '../Header';
import Main from '../Main';

import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;


const App = () => (
    <Layout>
        <Header className={styles.header}>
            <LadHeader />
        </Header>
        <Content className={styles.content}>
            <Main />
            </Content>
        <Footer className={styles.footer}>LAD @2017</Footer>
    </Layout>
);

export default App;
