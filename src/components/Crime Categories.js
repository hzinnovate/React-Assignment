import React , {Component} from 'react';


class CrimeCategories extends Component {
     constructor(){
         super();
         this.state = {
            CC: [],
            InputText: '',
            SearchResult: [',','']
         }
     }


     //Fetch API and get Data then convert it from json then reciveve on second promise and after these prossecc use setstate for save API data in state and re render component
     componentDidMount(){
        fetch(' https://data.police.uk/api/crime-categories')
        .then((res) =>
        res.json()
      )
      .then((resp) =>{

       //  console.log(resp)
            this.setState({
                CC: resp
            })
      }
      )
    }

    // There is Search function line 1 get cc from state; line 2) recieve event from input feild;
    Search(e){
        const {CC} = this.state
        const text = e.target.value
        // There i use filter method in variable SearchResult and gave it API data to filter and in filter i use ternery operator to define which data return from filter
        var SearchResult = CC.filter((e)=>{
            return e.name.substr(0, text.length).toLowerCase() === text.toLowerCase() ? e.name : ''
        })
// after filter method complete i use setstate and pass filtered data to state and input value to input depend state        
        
        this.setState({
            InputText: text,
            SearchResult
        })
    }

     render(){
         const {CC, InputText, SearchResult} = this.state
        //  console.log(SearchResult)
        // here i use ternery operator for check if user type some text on input field so return searchResult state in data and if input field is blank so return api data in data
         let data;
         InputText.length ? data = SearchResult : data = CC
         return(
             <div>
                 <h1>Crime Categories</h1>
                 {/* {Here is input user can search data from type any things in input and this input is depend on Input text state} */}
                 <div>
                 <input style={{outline: 'none',border: 'none', borderBottom: '3px solid black', width: '75%', paddingLeft: '10px'}}  placeholder='Search...' value={InputText} onChange={this.Search.bind(this)} />
                 </div>
                 <br />
                 
                 {/* {i use ternery operator for check if user type any letter in input so i check SearchResult.length if true i render data return by first ternary operator in 
                        render and if condition false it render a div that contain NO Match Data Found} */}
                 <div>
                 {SearchResult.length?<div>
                 {data.map((e, i)=>{
                     return(
                         <div style={{textAlign: 'left',paddingLeft: '30px'}}  className="alert alert-primary" role="alert" key={i + 1}>{i + 1}) {e.name}</div>
                     )
                    })}
                    </div> : <div>No Match Data Found</div>}
                    </div>
             </div>
         )
     }
}

export default CrimeCategories;