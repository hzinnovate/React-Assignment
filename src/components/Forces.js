import React, { Component } from 'react';
import { searchData } from '../config/api'
// Same work as Crime Categories
class Forces extends Component {
    constructor() {
        super();
        this.state = {
            Fc: [],
            InputText: '',
            SearchResult: ['1', '1']
        }
    }
    componentWillMount() {
        this.fetchData()
    }

    async fetchData() {
        this.setState({ loading: true })
        try {
            const result = await searchData('forces');
            // console.log('fecthData 1st console' , result)
            this.setState({
                Fc: result
            })
        } catch (e) {
            // console.log('error ==>' + e)
        } finally {
            this.setState({ loading: false })
        }
    }
    Search(e) {
        const { Fc } = this.state
        const text = e.target.value
        var SearchResult = Fc.filter((e) => {
            return e.name.substr(0, text.length).toLowerCase() === text.toLowerCase() ? e.name : ''
        })


        this.setState({
            InputText: text,
            SearchResult
        })
    }
    render() {
        const { Fc, InputText, SearchResult, loading } = this.state
        // console.log( 'Main Console ==>'  , Fc)
        let data;
        InputText.length ? data = SearchResult : data = Fc
        return (
            <div>
                <h1>Forces</h1>
                <div>
                    <input style={{ outline: 'none', border: 'none', borderBottom: '3px solid black', width: '75%', paddingLeft: '10px' }} placeholder='Search...' value={InputText} onChange={this.Search.bind(this)} />
                </div>
                <br />
                {loading ? 'Loading.......' : <div>
                    {SearchResult.length ? <div>
                        {data.map((e, i) => {
                            return (
                                <div style={{ textAlign: 'left', paddingLeft: '30px' }} className="alert alert-primary" role="alert" key={i + 1}>{i + 1}) {e.name}</div>
                            )
                        })}
                    </div>
                        : <div>No Match Data Found</div>}

                </div>}
            </div>
        )
    }
}

export default Forces;