import React, { Component } from 'react';
import { searchData, DataFetch } from '../config/api'



class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            crimes: [],
            forces: [],
            crimeSearch: '',
            forcesCrime: '',
            crimesSearched: []
        }
    }
    componentWillMount() {
        this.forcesData()
        this.crimeData()
    }

    async forcesData() {
        this.setState({ loading: true })
        try {
            const result = await searchData('forces');
            // console.log('fecthData 1st console' , result)
            this.setState({
                forces: result
            })
        } catch (e) {
            // console.log('error ==>' + e)
        } finally {
            this.setState({ loading: false })
        }
    }
    async crimeData() {
        this.setState({ loading: true })
        try {
            const result = await searchData('crime-categories');
            // console.log('fecthData 1st console' , result)
            this.setState({
                crimes: result
            })
        } catch (e) {
            // console.log('error ==>' + e)
        } finally {
            this.setState({ loading: false })
        }
    }
    crimes(e) {
        this.setState({
            crimeSearch: e.target.value
        })
    }
    forces(e) {
        this.setState({
            forcesCrime: e.target.value
        })
    }
    async searchCrimeData() {
        // this.setState({ loading: true })
        const { crimeSearch, forcesCrime } = this.state
        if (crimeSearch !== '' && forcesCrime !== '') {
            try {
                const result = await DataFetch(crimeSearch, forcesCrime);
                // console.log('final ===> ', result)
                let rs = result.map((e, i) => {
                    let obj = {
                        Catogery: e.category,
                        Date: e.month,
                        OutCome: e.outcome_status.category
                    }
                    return obj
                })
                // console.log(rs)
                this.setState({
                    crimesSearched: rs
                })
            } catch (e) {
                console.log('error ==>' + e)
            } finally {
                // this.setState({ loading: false })
            }
        }
    }

    render() {
        const { forces, crimes, crimeSearch, forcesCrime, crimesSearched } = this.state
        // console.log(forcesCrime)
        // console.log(crimeSearch)
        console.log(crimesSearched)
        return (
            <div>
                <h1>Dashboard</h1>
                <select onChange={(e) => this.forces(e)}>
                    {forces.map((e, i) => {
                        // console.log("ID ==>" + e.id, 'Name ==>' + e.name)
                        return (
                            <option key={i} value={e.id}>{e.name}</option>
                        )
                    })}
                </select>
                <br />
                <select onChange={e => this.crimes(e)}>
                    {crimes.map((e, i) => {
                        // console.log("ID ==>" + e.url, 'Name ==>' + e.name)
                        return (
                            <option key={i} value={e.id}>{e.name}</option>
                        )
                    })}
                </select>
                <br />
                <button onClick={() => this.searchCrimeData()}>
                    Search
                    </button>
                <br />
                <br />
                <br />

                <table style={{width: '100%' , border: '1px solid'}}>
                    <thead>
                        <tr>
                            <th style={{border: '1px solid'}}>
                                Catogery
                            </th>
                            <th style={{border: '1px solid'}}>
                                Date
                            </th>
                            <th style={{border: '1px solid'}}>
                                Crime
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {crimesSearched.length ? crimesSearched.map((e, i) => {
                            return (<tr key={i}>
                                <td style={{border: '1px solid'}}>{e.Catogery}</td>
                                <td style={{border: '1px solid'}}>{e.Date}</td>
                                <td style={{border: '1px solid'}}>{e.OutCome}</td>
                            </tr>
                            )
                        }) : <tr><td colSpan='3' style={{textAlign: 'center', border: '1px solid'}}>No Data Search</td></tr>}
                    </tbody>
                </table>
            </div>

        )
    }
}

export default Dashboard;