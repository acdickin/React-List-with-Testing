import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component{
	constructor(props){
		super(props),
		this.state={comment:""}
	}
	onHandleChange(e){
		this.setState({comment:e.target.value})	
	}
	handleSubmit(e){
		e.preventDefault();
	  this.props.saveComment(this.state.comment)
		this.setState({comment:''})	
	}


	render(){
		return(
			<form className='comment-box' onSubmit={this.handleSubmit.bind(this)}>
			<h3> Add a Comment</h3>
				<textarea 
					value={this.state.comment}
				  onChange={this.onHandleChange.bind(this)}
				/>
				<div>
					<button action="submit">Submit</button>
				</div>
			</form>
		)
	}
}
//no state wanted, just action creator
export default connect(null, actions)(CommentBox)