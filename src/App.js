import React from 'react';

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import coronaimage from './images/image.png';

class App extends React.Component {
state = {
    data: {},
    country: '',
}
    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data : fetchedData});
    }
    handleCountryChange = async(country) =>{
        console.log(country);
        //fetch the data
        const fetchedData = await fetchData(country);
        console.log(fetchedData);
        //set the state
        this.setState({data: fetchedData, country: country});

    }
    render(){
        const {data, country} = this.state;
        return(<div className = {styles.container}>
            <img src={coronaimage} alt='Covid19' className={styles.image}/>
            <Cards data={data}/>
            <CountryPicker handleCountryChange={ this.handleCountryChange }/>
            <Chart data={data} country={country}/>
            </div>
        );
    };
}
export default App;