import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Search extends Component {
 
    
    render() {
        return <div className='box'>

        <div className='boxheader'>
            <div className='boxtitle'>
                <h1>{this.props.title}</h1>
            </div>
        </div>

        <form onSubmit={()=>this.props.handle(event)}>
            <div className='boxbody'>
                <div className='formgroup'>
                    <input required name='search' id='search' type="text" placeholder="Search.."></input>
                </div>
            </div>
            <div className='boxfooter'>
            <button className='btn' type='submit'>Search</button>
            </div>
        </form>

</div> 
    }
}

export default withRouter(Search)