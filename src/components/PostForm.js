import React, { Component } from 'react'

class PostForm extends Component {

    constructor(props){
        super(props);
        this.state={
            title:'',
            body:''

        }
    }

    changeState=(e)=>{
        this.setState({[e.target.name]:e.target.value})
        // console.log(this.state)
    }

    onSubmit=(e)=>{
        e.preventDefault()
        const post={
            title:this.state.title,
            body:this.state.body
        }

        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(post)
        }).then((res)=>res.json())
        .then((data)=>{console.log(data)})
    }
    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <label>Title:</label><br/>
                    <input type="text" name="title" value={this.state.title} onChange={this.changeState}/><br/>
                    <label>Body:</label><br/>
                    <textarea name="body" value={this.state.body} onChange={this.changeState}/><br/>
                    <button type="submit">Post</button>

                </form>
                
            </div>
        )
    }
}

export default PostForm;
