import React,{Component} from 'react';

class Listing extends Component {
    constructor()
    {
        super()
            this.state={
                items:null
        }
    }
    componentDidMount()
    {
        fetch('http://127.0.0.1:8000/api/product').then((result)=>{
        result.json().then((data)=>{
            console.log("data",data);
            this.setState({items:data})
        })
        })
    }
    render(){
        return(
            <div>
                {
             this.state.items ?
             this.state.items.map((item)=>
             <div>
                 <span>name: {item.name}</span>
                 <span>category: {item.category}</span>
                 <span>price: {item.price}</span>
             </div>)
             :null
                }
            </div>
        );
    }
}

export default Listing;