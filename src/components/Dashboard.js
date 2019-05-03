import React, { Component } from 'react';
import { searchData } from '../config/api'



class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            Data: []
        }
    }

    async fetchData(e) {
        // e.target.value === 'no' ? this.setState({Data: []}) : 
        if (e.target.value === 'no') {
            this.setState({ Data: [] })
        } else {
            this.setState({ loading: true })
            try {
                const result = await searchData(e.target.value);
                // console.log('fecthData 1st console' , result)
                this.setState({
                    Data: result
                })
            } catch (e) {
                // console.log('error ==>' + e)
            } finally {
                this.setState({ loading: false })
            }
        }
    }


    render() {
        const { Data } = this.state
        return (
            <div>
                <div>
                    <h1>Dashboard</h1>
                    <select defaultValue='no' onChange={(e) => this.fetchData(e)}>
                        <option value='no' selected>Pleas Select 1 in list</option>
                        <option value='crime-categories'>Crime Categories</option>
                        <option value='forces'>Forces</option>
                    </select>
                </div>
                <br />
                <div>
                    {Data.length ? <div>{Data.map((e, i) => {
                        return (
                            <div style={{ textAlign: 'left', paddingLeft: '30px' }} className="alert alert-primary" role="alert" key={i + 1}>{i + 1}) {e.name}</div>
                        )
                    })}</div> : <div>No Data</div>}
                </div>


            </div>

        )
    }
}

export default Dashboard;